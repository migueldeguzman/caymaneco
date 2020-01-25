import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <div className={styles.navbar}>
  <Link to="/">Home</Link>
  <Link to="/blog">Climate Change Corner</Link>
  <div className={styles.dropdown}>
    <button className={styles.dropbtn}>More
      <i className="fa fa-caret-down"></i>
    </button>
    <div className={styles.dropdownContent}>
      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Climate Change Corner</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Beyond Cayman</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Climate Science 101</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Video Eco</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

)


  // <nav role="navigation">
  //   <ul className={styles.navigation}>
  //     <li className={styles.navigationItem}>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Climate Change Corner</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Beyond Cayman</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Climate Science 101</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Video Eco</Link>
  //     </li>
  //   </ul>
  // </nav>