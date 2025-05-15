import { Dashboardprofile, WelcomeUser } from "../components";
import styles from "../style";
import { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import httpClient from '../httpClient'


const DashboardBox = () => {

  const [user, setUser] = useState(null)
  
  useEffect(() => {
    (async() => {
      try {
        const resp = await httpClient.get('//localhost:5000/@me');
        setUser(resp.data); 
        console.log(user)
      }
      catch (error) {
        console.error("Not Authenticated");
      }
    })()
  },[])


  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar user={user}/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
          <div className={`${styles.boxWidth} `}>
            <div className="flex sm:flex-row flex-col justify-between items-center ">
              <WelcomeUser wel={"Dashboard"} />
            </div>
              <section
                className={`${styles.flexCenter} ${styles.boxWidth} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow p-5`}
              >
                <div className="flex-1">
                  <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full text-center"></h1>
                  <Dashboardprofile user={user}/>
                </div>
              </section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
