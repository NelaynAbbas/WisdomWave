import React from "react";
import styles from "../style";
import { chatroomStyle } from "../style";
import { WelcomeUser } from "../components";

const Welcome = ({ user }) => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${chatroomStyle.WelcomepaddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex sm:flex-row flex-col justify-between items-center ">
          <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] p-5">
            Welcome <br className="hidden sm:block" />
          </h1>
          <WelcomeUser user={user} />
          {/* <h4 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px] p-5"></h4> */}
        </div>
      </div>
    </section>
  );
};
export default Welcome;
