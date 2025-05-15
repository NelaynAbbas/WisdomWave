from flask import Blueprint, request, jsonify
from services.vector_db import retrieve_context, generate_answer_with_llm, retrieve_past_paper_questions
import os
import uuid
import tempfile
from werkzeug.utils import secure_filename

questions_bp = Blueprint('questions', __name__)

# In-memory mapping for demo: pdf_id -> file path
pdf_store = {}

@questions_bp.route('/important_questions', methods=['POST'])
def get_important_questions():
    data = request.json
    topic = data.get("topic")
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    book_context = retrieve_context(topic, k=3)
    past_paper_questions = retrieve_past_paper_questions(topic, k=5)
    if not past_paper_questions:
        return jsonify({"message": "No relevant past paper questions found."})
    return jsonify({"important_questions": past_paper_questions})

@questions_bp.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get("question")
    model = data.get("model", "mistral")
    if not question:
        return jsonify({"error": "Question is required"}), 400
    context = retrieve_context(question, k=3)
    response = generate_answer_with_llm(question, context, model)
    return jsonify({"answer": response})

# --- PDF Chat Endpoints ---
@questions_bp.route('/upload_pdf', methods=['POST'])
def upload_pdf():
    if 'pdf' not in request.files:
        return jsonify({"error": "No PDF uploaded"}), 400
    file = request.files['pdf']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    filename = secure_filename(file.filename)
    temp_dir = tempfile.gettempdir()
    save_path = os.path.join(temp_dir, f"{uuid.uuid4()}_{filename}")
    file.save(save_path)
    pdf_id = str(uuid.uuid4())
    pdf_store[pdf_id] = save_path
    return jsonify({"pdf_id": pdf_id})

@questions_bp.route('/ask_pdf', methods=['POST'])
def ask_pdf():
    data = request.get_json()
    pdf_id = data.get("pdf_id")
    question = data.get("question")
    if not pdf_id or not question:
        return jsonify({"error": "pdf_id and question required"}), 400
    pdf_path = pdf_store.get(pdf_id)
    if not pdf_path or not os.path.exists(pdf_path):
        return jsonify({"error": "PDF not found"}), 404
    # --- Extract text, create embeddings, answer ---
    from services.vector_db import extract_text_from_pdf, split_text, generate_answer_with_llm
    text = extract_text_from_pdf(pdf_path)
    chunks = split_text(text)
    # For demo: use chunks as context (no persistent vector DB for uploaded PDFs)
    context = "\n".join(chunks[:3])  # Use top 3 chunks as context
    answer = generate_answer_with_llm(question, context)
    return jsonify({"answer": answer}) 