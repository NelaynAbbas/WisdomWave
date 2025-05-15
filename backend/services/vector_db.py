import os
import PyPDF2
import ollama
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from process_papers import vector_db_papers

PDF_PATH = "E:/FYP/Code/WisdomWave/backend/data/CSBook.pdf"
CHROMA_DB_PATH = "E:/FYP/Code/WisdomWave/backend/chroma_db"

embedding_function = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vector_db = Chroma(persist_directory=CHROMA_DB_PATH, collection_name="rag_db", embedding_function=embedding_function)

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

def split_text(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    return text_splitter.split_text(text)

def store_in_vector_db(chunks):
    if vector_db._collection.count() > 0:
        print("✅ ChromaDB already has stored embeddings. Skipping reprocessing.")
        return
    print("🔄 Storing embeddings in ChromaDB...")
    batch_size = 50
    for i in range(0, len(chunks), batch_size):
        batch_texts = chunks[i:i+batch_size]
        vector_db.add_texts(texts=batch_texts)
        if i % 10 == 0:
            print( "✅" + str(i) + " parts done out of " + str(len(chunks)) )
    vector_db.persist()
    print("✅ Embeddings stored and persisted.")

def retrieve_context(question, k=3):
    results = vector_db.similarity_search(question, k=k)
    return "\n".join([doc.page_content for doc in results])

def generate_answer_with_llm(question, context, model="mistral"):
    prompt = f"""
    You are a helpful assistant trained to provide answers only from the provided book context. If the answer is not in the context, say \"I don't know.\"
    Context:
    {context}
    Question:
    {question}
    Answer:
    """
    response = ollama.chat(model=model, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

def retrieve_past_paper_questions(topic, k=5):
    results = vector_db_papers.similarity_search(topic, k=k)
    return [doc.page_content for doc in results]

# Run PDF processing at startup (if needed)
if os.path.exists(PDF_PATH):
    if vector_db._collection.count() == 0:
        print("📄 Processing the PDF since no embeddings exist...")
        text = extract_text_from_pdf(PDF_PATH)
        chunks = split_text(text)
        store_in_vector_db(chunks)
        print("✅ PDF Processing Completed!")
    else:
        print("✅ Using existing ChromaDB embeddings. No need to reprocess.")
else:
    print("❌ PDF file not found! Please check the path.") 