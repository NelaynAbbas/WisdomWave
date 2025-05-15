import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../httpClient";

const courses = [
  { name: "Computer", path: "/chatbot", description: "Chat with the Computer Science book and get answers to your questions." },
  { name: "English", path: "/englishchatbot", description: "Chat with the English book and get answers to your questions." },
  { name: "Maths", path: "/mathschatbot", description: "Chat with the Maths book and get answers to your questions." },
  { name: "Biology", path: "/biologychatbot", description: "Chat with the Biology book and get answers to your questions." },
  { name: "Chemistry", path: "/chemistrychatbot", description: "Chat with the Chemistry book and get answers to your questions." },
  { name: "Physics", path: "/physicschatbot", description: "Chat with the Physics book and get answers to your questions." },
  { name: "History", path: "/historychatbot", description: "Chat with the History book and get answers to your questions." },
  { name: "Geography", path: "/geographychatbot", description: "Chat with the Geography book and get answers to your questions." },
];

const CourseSelection = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center animate-fadeIn">
        Select a Course Chatbot
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
        {courses.map((course, index) => (
          <div key={index} className="bg-black-gradient-2 rounded-xl shadow-lg p-8 flex flex-col items-center w-80 mb-4">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">{course.name}</h2>
            <p className="text-gray-300 mb-4 text-center">{course.description}</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              onClick={() => navigate(course.path)}
            >
              Go to {course.name} Chatbot
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

export default CourseSelection;
