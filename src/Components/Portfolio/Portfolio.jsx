import React from "react";
import styles from "./Portfolio.module.scss";

import PortfolioSlide from "../ProjectSlide/PortfolioSlide";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-content h-100">
        <div className="row h-100">
          <div className="col-lg-5 d-flex align-items-end justify-content-center mb-5 mb-lg-0 justify-content-lg-end align-items-lg-center">
            <div>
              <h1 className={styles.portfolio_header}>PORTFOLIO</h1>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-center">
            <div className={`${styles.portfolio_line}`} />
          </div>
          <div className={`col-lg-5 ${styles.portfolio_slider}`}>
            <PortfolioSlide />
          </div>
        </div>
      </section>
    </>
  );
}
