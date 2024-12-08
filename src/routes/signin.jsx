import React from 'react'
import styles from '../style'

import { Navbar, Hero, Stats, Business, Testinomials, Clients, CTA, Footer, Logbox } from '../components'

const Signin = () =>  (
  <div className = "bg-primary w-full overflow-hidden">
    <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Logbox/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
)

export default Signin
