import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./routes/homepage";
import Chatbot from "./routes/chatbot";
import Chatpage from "./routes/Chatpage";
import Dashboard from "./routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/chatbot",
    children: [
      { path: "/chatbot", element: <Chatbot /> },
      { path: "/chatbot/chats/:id", element: <Chatpage /> },
    ],
  },
  {
    path: "/chatroom",
    element: <Chatpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
