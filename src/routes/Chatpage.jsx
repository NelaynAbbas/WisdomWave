import React from "react";
import styles from "../style";
import { chatroomStyle } from "../style";
import { Navbar, Footer, Sidebar, Welcome, ChatBox } from "../components";

const user = "Buzz";

const Chatpage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Welcome user={user} />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${chatroomStyle.sidebarBox} p-5 z-10`}>
        <Sidebar />
      </div>
      <div className={`${chatroomStyle.WelcomeBox} p-5`}>
        <ChatBox />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}></div>
  </div>
);

export default Chatpage;
