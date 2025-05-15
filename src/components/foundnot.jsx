import React from 'react'
import styles from '../style'

const Foundnot = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className='justify-center flex-col text-center'>
        <h1 className={`${styles.heading2}`}>Sorry<br className='sm:block hidden' />404 Page  Not Found</h1>
      </div>
    </section>
  )
}

export default Foundnot