import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./router";
import "./index.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
);


// const router = createBrowserRouter([
//   {   
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "/chatbot",
//     children: [
//       { path: "/chatbot", element: <Chatbot /> },
//       { path: "/chatbot/chats/:id", element: <Chatpage /> },
//     ],
//   },
//   {
//     path: "/chatroom",
//     element: <Chatpage />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
