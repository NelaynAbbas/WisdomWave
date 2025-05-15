import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import { Navbar3, Ask, Footer } from "../components";
import httpClient from "../httpClient";

const Chatbot = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="bg-primary w-full overflow-hidden">
      <div className="min-h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar3 />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Ask />
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
  );
};

export default Chatbot;
