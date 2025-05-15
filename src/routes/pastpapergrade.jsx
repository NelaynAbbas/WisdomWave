import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../httpClient";

const courses = [
  { name: "O1 Levels", path: "/pastpapercourse", description: "Get past paper analysis and insights for O1 Levels." },
  { name: "O2 Levels", path: "/o2courses", description: "Get past paper analysis and insights for O2 Levels." },
  { name: "A1 Levels", path: "/a1courses", description: "Get past paper analysis and insights for A1 Levels." },
  { name: "A2 Levels", path: "/a2courses", description: "Get past paper analysis and insights for A2 Levels." }
];

const Pastpapergrade = () => {
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

      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
        {courses.map((course, index) => (
          <div key={index} className="bg-black-gradient-2 rounded-xl shadow-lg p-8 flex flex-col items-center w-80 mb-4">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">{course.name}</h2>
            <p className="text-gray-300 mb-4 text-center">{course.description}</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              onClick={() => navigate(course.path)}
            >
              Go to {course.name}
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

export default Pastpapergrade;