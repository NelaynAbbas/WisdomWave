import React, { useState } from 'react'
import styles from '../style'
import { FaUser, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdEmail } from 'react-icons/md';
import httpClient from '../httpClient';
import { motion } from "framer-motion";

import { Navbar, Footer, Logbox } from '../components'

const Signin = () =>  {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signupUser = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      const response = await httpClient.post("http://localhost:5000/signup", {
        name: formData.name,
        username: formData.username,
        password: formData.password,
        email: formData.email,
      });
  
      setMessage("Signup successful! Redirecting...");
      setError(""); // Clear any previous error
      setTimeout(() => {
        window.location.href = "/signin"; // Redirect after success
      }, 1500);
    } catch (error) {
      if (error.response?.status === 400) {
        setError("User already exists.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };
  

  const [formData, setFormData] = useState({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
  
    const validateForm = () => {
      let valid = true;
      let newErrors = {};
    
      // Name Validation
      if (!formData.name.trim()) {
        newErrors.name = "Name is required.";
        valid = false;
      }
    
      // Username Validation
      if (!formData.username.trim()) {
        newErrors.username = "Username is required.";
        valid = false;
      }
    
      // Email Validation (Regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format.";
        valid = false;
      }
    
      // Password Validation (Regex)
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters long, with at least one letter and one number.";
        valid = false;
      }
    
      setErrors(newErrors); // Update error state
      return valid; // Return validation result
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the field being edited
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!validateForm()) {
        return;
      }
    
      await signupUser(); // Now correctly submits the form data
    };
    
  
  return(
  <div className = "bg-primary w-full overflow-hidden">
    <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    <div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div
          className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingX} py-[20px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-center text-white font-poppins w-[50%]`}
        >
          <form className="w-[100%] h-[100%] mx-[50px]" onSubmit={handleSubmit}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[25px] text-white ss:leading-[100px] leading-[75px]">
              SignUp <br className="sm:block hidden" />
            </h1>
            <div className="space-y-4">
              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e); // Update formData state
                    setName(e.target.value); // Update name state separately
                  }}
                  required
                />
                <MdDriveFileRenameOutline />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => {
                    handleChange(e); // Update formData state
                    setUsername(e.target.value); // Update name state separately
                  }}
                  required
                />
                <FaUser />
              </div>
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e); // Update formData state
                    setEmail(e.target.value); // Update name state separately
                  }}
                  required
                />
                <MdEmail />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => {
                    handleChange(e);
                    setPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <FaLock />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <FaLock />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.08,
                background: "linear-gradient(90deg, #14B8A6, #0D9488)",
                boxShadow: "0px 5px 20px rgba(20, 184, 166, 0.4)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="my-[15px] px-[30px] py-[10px] bg-teal-900 text-white font-semibold text-lg rounded-[20px] w-[100%] shadow-lg"
            >
              Signup
            </motion.button>

            <div className="flex justify-center">
              <p>
                Already have an account?{' '}
                <a href="/signin" className="text-slate-600">
                  Login Now
                </a>
              </p>
            </div>
            {message && <p className="text-green-500 mt-4">{message}</p>}
          </form>
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
