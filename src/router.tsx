import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Homepage from "./routes/homepage";
import Chatbot from "./routes/chatbot";
import Notfound from './routes/notfound';
import Chatpage from "./routes/Chatpage";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Signin from "./routes/signin"


const Routers = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="*" Component={Notfound} />
            <Route path="/chatbot" Component={Chatbot} />
            <Route path="/chatpage" Component={Chatpage} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
        </Routes>
    </Router>
)}

export default Routers
