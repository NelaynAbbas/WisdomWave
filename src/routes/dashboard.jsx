import React from "react";
import styles from "../style";
import { chatroomStyle } from "../style";
import {
  Navbar,
  Footer,
  Sidebar,
  Welcome,
  DashboardBox,
  Navbaar,
  Dashboardprofile,
  WelcomeUser,
} from "../components";

const user = "Buzz";

const Dashboard = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbaar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth} `}>
        <div className="flex sm:flex-row flex-col justify-between items-center ">
          {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" /> */}
          <WelcomeUser user={"Dashboard"} />
        </div>
        <DashboardBox />
        <Footer />
      </div>
    </div>
  </div>
);

export default Dashboard;
