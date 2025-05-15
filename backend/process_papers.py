import os
import PyPDF2
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
import pdfplumber

PAST_PAPERS_PATH = "E:/FYP/Code/WisdomWave/backend/past_papers"
CHROMA_DB_PATH_PAPERS = "E:/FYP/Code/WisdomWave/backend/chroma_db_papers"

# Load embedding model
embedding_function = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# Initialize ChromaDB for past paper questions
vector_db_papers = Chroma(persist_directory=CHROMA_DB_PATH_PAPERS, collection_name="past_papers", embedding_function=embedding_function)


def extract_text_from_pdf(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n" if page.extract_text() else ""
    return text

def split_text(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=50)
    return text_splitter.split_text(text)

def store_past_paper_questions():
    if vector_db_papers._collection.count() > 0:
        print("✅ Past papers already processed.")
        return

    all_text = ""
    for filename in os.listdir(PAST_PAPERS_PATH):
        if filename.endswith(".pdf"):
            file_path = os.path.join(PAST_PAPERS_PATH, filename)
            print(f"🔄 Processing: {filename}")
            text = extract_text_from_pdf(file_path)
            all_text += text + "\n"

    chunks = split_text(all_text)

    print("🔄 Storing past paper questions in ChromaDB...")
    batch_size = 50
    for i in range(0, len(chunks), batch_size):
        vector_db_papers.add_texts(chunks[i:i+batch_size])
        if i % 10 == 0:
            print(f"✅ {i} parts stored.")

    vector_db_papers.persist()
    print("✅ Past paper questions stored successfully!")

if __name__ == "__main__":
    store_past_paper_questions()
