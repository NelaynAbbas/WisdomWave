import React, { useState } from 'react'
import styles from '../style'
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

import { Navbar2, Footer, Logbox } from '../components'
import { Navigate } from 'react-router-dom';

const notsignedin = () =>  {
  return(
    <div className = "bg-primary w-full overflow-hidden">
        <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
            <div className={`${styles.boxWidth}`}>
                <Navbar2/>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div>
                    <div className={`flex-1 flex ${styles.flexCenter}relative`}>
                        
                        <div
                        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow text-center text-white font-poppins w-[100%]`}
                        >
                            <h1 className="text-4xl font-bold">Welcome to WisdomWave</h1>
                            <p className="text-lg">You need to sign in to access WisdomWave..</p>
                            <div className="w-full h-full flex justify-center gap-8">
                                <button
                                    type="button"
                                    className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-lg shadow-lg text-lg font-semibold transition-all 
                                            hover:scale-110 hover:bg-white/30 hover:text-gray-900 hover:shadow-xl active:scale-100 
                                            flex items-center justify-center w-52 h-16"
                                    onClick={() => window.location.href = '/signin'}
                                >
                                    Login to WisdomWave
                                </button>

                                <button
                                    type="button"
                                    className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-lg shadow-lg text-lg font-semibold transition-all 
                                            hover:scale-110 hover:bg-white/30 hover:text-gray-900 hover:shadow-xl active:scale-100 
                                            flex items-center justify-center w-52 h-16"
                                    onClick={() => window.location.href = '/signup'}
                                >
                                    Sign Up to WisdomWave
                                </button>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.paddingX} ${styles.boxWidth}`}>
                <Footer/>
            </div>
        </div>
    </div>
)}

export default notsignedin