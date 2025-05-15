import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
<<<<<<< HEAD
import { motion } from "framer-motion";


const GetStarted = () => (
  <motion.div
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.6)" }}
    whileTap={{ scale: 0.95 }}
    className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-all`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full backdrop-blur-lg shadow-xl`}>
        <motion.div
          initial={{ y: 5 }}
          animate={{ y: -5 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={`${styles.flexStart} flex-row`}
        >
      <a href="/option" className="flex flex-col items-center justify-center">
          <p className="font-poppins font-semibold text-[20px] leading-[24px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className="w-[26px] h-[26px] object-contain" alt="arrow" />
        <p className="font-poppins font-semibold text-[20px] leading-[24px]">
          <span className="text-gradient">Started</span>
        </p>
      </a>
      </motion.div>
    </div>
  </motion.div>
);

export default GetStarted;
=======

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                    <span className='text-gradient'>Get</span>
                </p>
                <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow' />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Started</span>
            </p>
        </div>
      
    </div>
)


export default GetStarted
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
