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
    <div></div>
  );
};

export default Signbox;