import React from 'react'
import styles from '../style'


import { Navbar3, Hero, Stats, Business, Testinomials, Clients, CTA, Footer } from '../components'

const Homepage = () =>  (
  <div className = "bg-primary w-full overflow-hidden">
    <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar3/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business/>
        <Testinomials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)
export default Homepage