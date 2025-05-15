import React from "react";
import styles from "../style";
import { chatroomStyle } from "../style";
import {
  Navbar,
  Footer,
  Sidebar,
  Welcome,
  DashboardBox,
  Dashboardprofile,
  WelcomeUser,
} from "../components";

const user = "Buzz";

const Dashboard = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth} `}>
        <DashboardBox />
      </div>
    </div>
  </div>
);

export default Dashboard;
