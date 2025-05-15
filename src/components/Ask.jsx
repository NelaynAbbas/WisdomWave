import React, { useState } from "react";
import styles from '../style';
import httpClient from "../httpClient";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]); // Store all past questions & answers
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError(null);

    // Add user question to history first
    setHistory(prevHistory => [...prevHistory, { type: "user", text: question }]);

    try {
      const response = await httpClient.post("//localhost:5000/ask", {
        "question": question,
        "model": "mistral"
      });

      const newAnswer = response.data?.answer || "⚠️ No answer received. Check backend response.";

      // Add bot response to history
      setHistory(prevHistory => [...prevHistory, { type: "bot", text: newAnswer }]);

    } catch (error) {
      console.error("Error fetching answer:", error);
      let errorMessage = "❌ Network error. Make sure the backend is running.";

      if (error.response) {
        console.log("Backend Response:", error.response.data);
        if (error.response.status === 404) {
          errorMessage = "❌ Endpoint not found. Check if Flask is running on port 5000.";
        } else if (error.response.status === 500) {
          errorMessage = "❌ Server error. Check backend logs.";
        } else {
          errorMessage = `❌ Error ${error.response.status}: ${error.response.data}`;
        }
      }

      setHistory(prevHistory => [...prevHistory, { type: "bot", text: errorMessage }]);

    } finally {
      setLoading(false);
      setQuestion(""); // Clear input after asking
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <div className="w-full max-w-7xl bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10">
        <p className="text-gray-300 text-center mb-4">Ask me anything!</p>

        {/* Chat Display */}
        <div className="h-[350px] overflow-y-auto p-3 bg-gray-900 rounded-xl shadow-inner space-y-4">

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
        <div className="flex gap-3 mt-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            className={`flex-1 p-2 w-full rounded-lg border border-gray-700 bg-gray-800 text-white ${styles.inputFocus}`}
          />
          <button
            onClick={askQuestion}
            disabled={loading}
            className={`px-5 py-3 rounded-lg font-semibold text-white transition-all ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "🤔 Thinking..." : "🚀 Ask"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ask;
