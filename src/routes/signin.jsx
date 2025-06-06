import React, { useState } from 'react'
import styles from '../style'
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import httpClient from '../httpClient';
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea

import { Navbar2, Footer, Logbox } from '../components'

const Signin = () =>  {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const logInUser = async (e) => {
    try{
      const response = await httpClient.post("//localhost:5000/signin", {
      username,
      password,
    });  
      window.location.href = "/";
    }
    catch(error){
      if(error.response.status === 401){
        console.log("Invalid username or password");
<<<<<<< HEAD
        setError("Invalid username or password");
      }
      else{
        console.log("An error occured. Please try again later");
        setError("An error occured. Please try again later");
=======
      }
      else{
        console.log("An error occured. Please try again later");
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
      }
    }
  };
  
  return(
  <div className = "bg-primary w-full overflow-hidden">
    <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar2/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-center text-white font-poppins w-[50%]`}
        >
          <form className="w-[100%] h-[100%] mx-[50px]">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100px] leading-[75px]">
              Login <br className="sm:block hidden" />
            </h1>
            <div className="space-y-4">
              <div
                className={`input-box flex flex-row-reverse gap-4 justify-end items-center`}
              >
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-800 border-[2px] ${styles.inputFocus}`}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
                <FaUser />
              </div>
              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <FaLock />
              </div>
            </div>
            <div className="remember-forget justify-between flex my-[10px]">
              <label>
                <input className="mr-[5px]" type="checkbox" />
                Remember Me?{' '}
              </label>
              <a href="#" className="text-slate-600">
                Forgot Password?
              </a>
            </div>
<<<<<<< HEAD
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <motion.button
                type="button"
                onClick={() => logInUser()}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#14B8A6", // Lighter teal on hover
                  boxShadow: "0px 4px 15px rgba(20, 184, 166, 0.5)" // Glowing effect
                }}
                whileTap={{ scale: 0.95 }} // Slight press animation
                transition={{ type: "spring", stiffness: 300 }}
                className="px-[30px] py-[10px] bg-teal-900 text-white font-semibold text-lg rounded-[20px] w-[100%] shadow-lg"
              >
                Login 
              </motion.button>
=======
            {/* Display error message in red if login fails */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="button"
              onClick = {() => logInUser()}
              className={`animated-button px-[30px] py-[7px] bg-teal-900 rounded-[20px] w-[100%] ${styles.buttonHover}`}
            >
              Login
            </button>
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
            <div className="my-[10px] flex justify-center">
              <p>
                Don't have any account?{' '}
                <a href="/signup" className="text-slate-600">
                  {' '}
                  Register Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
)}

export default Signin
