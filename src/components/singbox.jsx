import React from 'react'
import styles from '../style' 
import { discount,robot} from '../assets'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Logbox = () => {
  return (
    <div >
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-center text-white font-poppins `}>
            <form className='w-[100%] h-[100%] mx-[50px]'>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100px] leading-[75px]'>
              SignUp <br className='sm:block hidden' />
              </h1>
              <div className='space-y-4'>
                <div className={`input-box flex flex-row-reverse gap-4 justify-end items-center`}>
                    <input className='w-[100%] h-[100%] py-[7px] text-center rounded-[30px] bg-transparent border-teal-800 border-[2px]' type='text' placeholder='Name' required /><MdDriveFileRenameOutline />
                </div>
                <div className={`input-box flex flex-row-reverse gap-4 justify-end items-center`}>
                    <input className='w-[100%] h-[100%] py-[7px] text-center rounded-[30px] bg-transparent border-teal-800 border-[2px]' type='text' placeholder='Username' required /><FaUser />
                </div>
                <div className='input-box flex flex-row-reverse gap-4 justify-end items-center'>
                    <input className='w-[100%] h-[100%] py-[7px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px]' type='email' placeholder='Email' required /><MdEmail />
                </div>
                <div className='input-box flex flex-row-reverse gap-4 justify-end items-center'>
                    <input className='w-[100%] h-[100%] py-[7px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px]' type='password' placeholder='Password' required /><FaLock />
                </div>
                <div className='input-box flex flex-row-reverse gap-4 justify-end items-center'>
                    <input className='w-[100%] h-[100%] py-[7px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px]' type='password' placeholder='Confirm Password' required /><FaLock />
                </div>
              </div>
              <button type='submit' className='px-[30px] py-[7px] bg-teal-900 rounded-[20px] w-[100%] my-[15px]'>Signup</button>
              <div className='flex justify-between'>
                  <p>Already have account? <a href='/signin' className='text-slate-600'>Login Now</a></p>
              </div>
            </form>
        </div>
        

        
      </div>
    </div>
  )
}

export default Logbox
