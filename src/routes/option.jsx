import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import httpClient from "../httpClient";
import styles from '../style';

const options = [
  {
    name: "Advanced Past Papers Analysis",
    path: "/pastpapergrade",
    description: "Analyze past papers and get frequently asked questions and insights or solutions. Get the most out of your past papers.",
    button: "Go to Past Paper Analysis"
  },
  {
    name: "Answers From SpecificBook",
    path: "/courses",
    description: "Ask questions and get tailored answers on restricetd data directly extracted from the book content. Have you persoalised chatbot.",
    button: "Go to Book Q&A"
  },
  {
    name: "Past Paper Analysis or Answers from Book",
    path: "/pdfchat",
    description: "Upload a PDF and ask questions. The system will use RAG to answer from your PDF, just like with the books.",
    button: "Go to PDF Chat"
  }
];

const Option = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await httpClient.get("//localhost:5000/@me", {
          withCredentials: true,  // Ensure session cookies are sent
        });
        setUser(response.data);
      } catch (error) {
        console.log("User not authenticated, redirecting...");
        navigate("/notsignedin");
      }
    };

    checkAuth();
  }, [navigate]);

  if (!user) {
    return null; // Prevent rendering until authentication check completes
  }

  return (
    <div className="min-h-screen bg-black-gradient flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Choose an Option</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {options.map((opt, index) => (
          <div key={index} className="bg-black-gradient-2 rounded-xl shadow-lg p-8 flex flex-col items-center w-80">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">{opt.name}</h2>
            <p className="text-gray-300 mb-4 text-center">{opt.description}</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              onClick={() => navigate(opt.path)}
            >
              {opt.button}
            </button>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Option;
