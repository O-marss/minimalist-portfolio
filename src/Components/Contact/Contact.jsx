import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <section className="contact-content h-100">
        <div className="row h-100">
          <div className="col-lg-5 d-flex align-items-end justify-content-center mb-5 mb-lg-0 justify-content-lg-end align-items-lg-center">
            <div>
              <h1 className={styles.contact_header}>Contact</h1>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-center">
            <div className={`${styles.contact_line}`} />
          </div>
          <div className={`col-lg-5 ${styles.contact_form}`}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
