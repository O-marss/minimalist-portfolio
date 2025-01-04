import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <section className={`${styles.about_content} w-100`}>
        <div className="row h-100">
          <div className="col-lg-5 d-flex align-items-end justify-content-center mb-5 mb-lg-0 justify-content-lg-end align-items-lg-center">
            <div>
              <h1 className={`${styles.about_header}`}>About</h1>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-center">
            <div className={`center-line`}></div>
          </div>
          <div
            className={`col-lg-5 d-flex justify-content-center align-items-center justify-content-lg-start`}
          >
            <div className={`${styles.about_text}`}>
              <p className="m-0">Web Developer</p>
              <p className="m-0">Lifelong Learner</p>
              <p className="m-0">Minimalist Design Lover</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
