import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import styles from "../style";

const PdfChat = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [pdfId, setPdfId] = useState(null);
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]); // Chat history: {type, text}
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Upload PDF
  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    setPdfUploaded(false);
    setPdfId(null);
    setHistory([]);
    setError("");
  };

  const handleUpload = async () => {
    if (!pdfFile) return;
    setLoading(true);
    setError("");
    setHistory([]);
    const formData = new FormData();
    formData.append("pdf", pdfFile);
    try {
      const res = await fetch("http://localhost:5000/upload_pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.pdf_id) {
        setPdfUploaded(true);
        setPdfId(data.pdf_id);
      } else {
        setError(data.error || "Failed to upload PDF.");
      }
    } catch (err) {
      setError("Error: " + err.message);
    }
    setLoading(false);
  };

  // Step 2: Ask question (chat style)
  const handleAsk = async () => {
    if (!pdfId || !question.trim()) return;
    setLoading(true);
    setError("");
    // Add user question to history
    setHistory(prev => [...prev, { type: "user", text: question }]);
    try {
      const res = await fetch("http://localhost:5000/ask_pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdf_id: pdfId, question }),
      });
      const data = await res.json();
      const botAnswer = data.answer || data.error || "No answer returned.";
      setHistory(prev => [...prev, { type: "bot", text: botAnswer }]);
    } catch (err) {
      setHistory(prev => [...prev, { type: "bot", text: "Error: " + err.message }]);
    }
    setLoading(false);
    setQuestion("");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="min-h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar3 />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 relative">
              <div className="absolute z-0 w-[60%] h-[70%] -left-[30%] top-0 blue__gradient" />
              <div className="relative z-10 w-full max-w-2xl bg-black-gradient-2 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-primary mb-6">PDF Chat</h1>
                <p className="text-gray-300 mb-4 text-center">Upload a PDF and chat with it. The system will use RAG to answer from your PDF, just like with the books.</p>
                {/* Upload PDF */}
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="mb-4 text-white"
                />
                <button
                  className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors mb-6"
                  onClick={handleUpload}
                  disabled={loading || !pdfFile}
                >
                  {loading ? "Uploading..." : "Upload PDF"}
                </button>
                {/* Chat UI after upload */}
                {pdfUploaded && (
                  <div className="w-full flex flex-col items-center">
                    {/* Chat Display */}
                    <div className="h-[350px] overflow-y-auto p-3 bg-gray-900 rounded-xl shadow-inner space-y-4 w-full mb-4">
                      {history.length === 0 ? (
                        <p className="text-gray-500 text-center">Your conversation will appear here.</p>
                      ) : (
                        history.map((entry, index) => (
                          <div
                            key={index}
                            className={`flex ${entry.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`p-3 max-w-xs rounded-xl shadow-md text-white ${
                                entry.type === "user"
                                  ? "bg-blue-500 text-right rounded-br-none"
                                  : "bg-gray-700 text-left rounded-bl-none"
                              }`}
                            >
                              {entry.text}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    {/* Input Box */}
                    <div className="flex gap-3 mt-2 w-full">
                      <input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Type your question..."
                        className={`flex-1 p-2 w-full rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none`}
                        onKeyDown={e => { if (e.key === 'Enter') handleAsk(); }}
                        disabled={loading}
                      />
                      <button
                        onClick={handleAsk}
                        disabled={loading}
                        className={`px-5 py-3 rounded-lg font-semibold text-white transition-all ${
                          loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        {loading ? "🤔 Thinking..." : "🚀 Ask"}
                      </button>
                    </div>
                  </div>
                )}
                {/* Error display */}
                {error && (
                  <div className="mt-4 bg-red-900 rounded p-4 text-white w-full">
                    <span className="font-bold text-red-400">Error:</span>
                    <p className="mt-2">{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfChat; 