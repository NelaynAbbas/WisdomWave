import { Dashboardprofile, WelcomeUser } from "../components";
import styles from "../style";

const DashboardBox = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.boxWidth} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow p-5`}
    >
      <div className="flex-1">
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full text-center"></h1>
        <Dashboardprofile />
      </div>
    </section>
  );
};

export default DashboardBox;
