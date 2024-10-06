import React from 'react'
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './routes/homepage';
import Chatbot from './routes/chatbot';
import Chatpage from './routes/Chatpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/chatbot",
    children:[
      {path:"/chatbot", element: <Chatbot/>},
      {path:"/chatbot/chats/:id", element:<Chatpage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)