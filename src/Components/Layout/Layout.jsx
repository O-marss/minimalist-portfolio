import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styles from "../LoadingScreen/LoadingScreen.module.scss";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlideUp(true), 1000);
    const contentTimer = setTimeout(() => setIsLoading(false), 1300);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`${styles.loading_screen_wrapper} ${
            slideUp ? `${styles.slide_up}` : ""
          }`}
        >
          (<LoadingScreen />)
        </div>
      ) : (
        <>
          <Navbar />
          <main className="page-container container">
            <Outlet></Outlet>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
