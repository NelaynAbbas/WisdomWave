import { ChatBox } from "./components";

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[42px] text-[34px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  inputFocus: "transition-all duration-300 transform focus:scale-105 focus:border-teal-500 focus:outline-none",
  buttonHover: "hover:bg-teal-700 active:scale-95 transition-transform duration-200",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const chatroomStyle = {
  WelcomeBox: "xl:max-w-[1280px] w-full",
  WelcomepaddingY: "sm:py-6 py-6",
  ChatBox: "xl:max-w-[1080px] w-auto",
  sidebarBox: "xl:max-w-[200px] w-auto",
  receiveChat:
    "relative ml-3 text-sm text-white py-2 px-4 shadow-lg rounded-xl bg-gray-500",
  sendChat:
    "relative mr-3 text-sm text-white py-2 px-4 shadow rounded-xl bg-gray-700",
};

export const dashboardStyle = {
  iconcolor: "text-gradient",
};

export default styles;
