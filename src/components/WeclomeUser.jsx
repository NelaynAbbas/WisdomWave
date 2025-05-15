import styles from "./WelcomeUser.module.css";

const WelcomeUser = ({ wel }) => {
  return (
    <div>
      <h1
        className={`${styles.heading} flex-1  font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px]  `}
      >
        {wel}.
      </h1>
    </div>
  );
};

export default WelcomeUser;
