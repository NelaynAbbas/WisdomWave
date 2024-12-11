import React, { useState } from 'react';
import styles from '../style';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdEmail } from 'react-icons/md';

const Signbox = () => {
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
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{3,30}$/; // Name: 3-30 characters, only letters and spaces
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/; // Username: 4-16 characters, alphanumeric, underscores allowed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password: Minimum 8 characters, at least one letter and one number

    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name must be 3-30 characters long and can only include letters and spaces.';
    }
    if (!usernameRegex.test(formData.username)) {
      newErrors.username = 'Username must be 4-16 characters and can include letters, numbers, and underscores.';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long, with at least one letter and one number.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Process form submission
    setMessage('SignUp successful!');
    console.log('Form data:', formData);
  };

  return (
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
                <MdEmail />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FaLock />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FaLock />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className={`animated-button my-[15px] px-[30px] py-[3px] bg-teal-900 rounded-[20px] w-[100%] ${styles.buttonHover}`}
            >
              Signup
            </button>
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
  );
};

export default Signbox;