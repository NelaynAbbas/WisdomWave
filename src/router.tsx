import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
import React from 'react'
import Homepage from "./routes/homepage";
import Chatbot from "./routes/chatbot";
import Notfound from './routes/notfound';
import Chatpage from "./routes/Chatpage";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Signin from "./routes/signin"
<<<<<<< HEAD
import notsignedin from "./routes/notsignedin"
import CourseSelection from "./routes/courses"
import Grade from "./routes/grade"
import Pastpaper from "./routes/pastpaper"
import Option from "./routes/option"
import Pastpapercourse from "./routes/pastpapercourse"
import Pastpapergrade from "./routes/pastpapergrade"
import PdfChat from "./routes/pdfchat"
=======

>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea

const Routers = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="*" Component={Notfound} />
            <Route path="/chatbot" Component={Chatbot} />
<<<<<<< HEAD
            <Route path="/chatroom" Component={Chatpage} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
            <Route path="/notsignedin" Component={notsignedin} />
            <Route path="/courses" Component={CourseSelection}/>
            <Route path="/grade" Component={Grade}/>
            <Route path="/pastpaper" Component={Pastpaper}/>
            <Route path="/option" Component={Option}/>
            <Route path="/pastpapercourse" Component={Pastpapercourse}/>
            <Route path="/pastpapergrade"  Component={Pastpapergrade}/>
            <Route path="/pdfchat" Component={PdfChat} />
=======
            <Route path="/chatpage" Component={Chatpage} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
        </Routes>
    </Router>
)}

export default Routers
