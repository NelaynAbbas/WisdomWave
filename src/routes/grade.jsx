import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../httpClient";

const courses = [
  { name: "O1 Levels", path: "/courses" },
  { name: "O2 Levels", path: "/o2courses" },
  { name: "A1 Levels", path: "/a1courses" },
  { name: "A2 Levels", path: "/a2courses" }
];

const Grade = () => {
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
        Select Your Grade
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <button
            key={index}
            onClick={() => navigate(course.path)}
            className="px-6 py-4 rounded-full bg-white/20 backdrop-blur-lg shadow-lg text-lg font-semibold transition-all 
                       hover:scale-110 hover:bg-white/30 hover:text-gray-900 hover:shadow-xl active:scale-100 
                       flex items-center justify-center w-40 h-16"
          >
            {course.name}
          </button>
        ))}
      </div>
        
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Grade;
