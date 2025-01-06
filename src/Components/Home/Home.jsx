import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import blob from "../../assets/blob.svg";
import blob2 from "../../assets/blob (1).svg";
import styles from "./Home.module.scss";


export default function Home() {


  return (
    <>
     
      
      <header className="w-100 mt-md-5 mt-lg-0">
        <div
          className={`flex-lg-row jusifty-content-lg-evenly ${styles.intro}`}
        >
          <div className={`flex-lg-column py-lg-0 ${styles.intro_icon_left}`}>
            <div className="instagram-icon">
              <a href="#">
                <i className="fab fa-instagram my-lg-4"></i>
              </a>
            </div>
            <div className="facebook-icon">
              <a href="#">
                <i className="fab fa-facebook my-lg-4"></i>
              </a>
            </div>
            <div className="pinterest-icon">
              <a href="#">
                <i className="fab fa-pinterest my-lg-4"></i>
              </a>
            </div>
          </div>
          <div className={`position-absolute ${styles.intro_image}`}>
            <div className="position-absolute w-100">
              <img src={blob2} alt="" className={`${styles.sub_circle}`} />
            </div>
            <div className="position-absolute w-100">
              <img src={blob} alt="" className={`${styles.main_circle}`} />
            </div>
            <div className={`${styles.intro_about}`}>
              <h1>
                Hello
                <br />
                I am Omar
                <br />
              </h1>
              <h2>Web Developer</h2>
            </div>
          </div>
          <div className={`flex-lg-column py-lg-0 ${styles.intro_icon_right}`}>
            <div className="mail-icon">
              <a href="mailto:omarmoh3010@outlook.com">
                <i className="fa-solid fa-envelope my-lg-4"></i>
              </a>
            </div>
            <div className="linkedin-icon">
              <a href="https://linkedin.com/in/omar3010">
                <i className="fab fa-linkedin my-lg-4"></i>
              </a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/O-marss/">
                <i className="fab fa-github my-lg-4"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      
    </>
  );
}
