import React from 'react';
import styles from '../style';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Logbox = () => {
  return (
    <div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-center text-white font-poppins w-[50%]`}
        >
          <form className="w-[100%] h-[100%] mx-[50px]">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100px] leading-[75px]">
              Login <br className="sm:block hidden" />
            </h1>
            <div className="space-y-4">
              <div
                className={`input-box flex flex-row-reverse gap-4 justify-end items-center`}
              >
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-800 border-[2px] ${styles.inputFocus}`}
                  type="text"
                  placeholder="Username"
                  required
                />
                <FaUser />
              </div>
              <div className="input-box flex flex-row-reverse gap-4 justify-end items-center">
                <input
                  className={`w-[100%] h-[100%] py-[3px] text-center rounded-[30px] bg-transparent border-teal-900 border-[2px] ${styles.inputFocus}`}
                  type="password"
                  placeholder="Password"
                  required
                />
                <FaLock />
              </div>
            </div>
            <div className="remember-forget justify-between flex my-[10px]">
              <label>
                <input className="mr-[5px]" type="checkbox" />
                Remember Me?{' '}
              </label>
              <a href="#" className="text-slate-600">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className={`animated-button px-[30px] py-[7px] bg-teal-900 rounded-[20px] w-[100%] ${styles.buttonHover}`}
            >
              Login
            </button>
            <div className="my-[10px] flex justify-center">
              <p>
                Don't have any account?{' '}
                <a href="/signup" className="text-slate-600">
                  {' '}
                  Register Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logbox;
