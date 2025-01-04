import React, { useEffect, useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import {
  handleMouseDown,
  handleFormInputUp,
  handleTextAreaDown,
  handleTextAreaUp,
} from "./ContactFormFunctions.jsx";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className={`row container position-relative ${styles.form_container} pb-5 pb-md-0`}
      >
        <div id="contactText" className={`col ${styles.contact_text}`}>
          <div>
            <h2>
              <span>Interested in working together?</span>
            </h2>
            <h2 className="mb-5">
              <span>Let’s make something great.</span>
            </h2>
          </div>
        </div>
        <div className="col-12 mb-5 row justify-content-center justify-content-lg-start">
          <div className={`input_container col-8 ${styles.input_container} `}>
            <input
              type="text"
              name="name"
              id="name"
              aria-label="Your name"
              value={formValues.name}
              className={`form_input ${styles.form_input} user_input`}
              onChange={handleChange}
              onFocus={handleMouseDown}
              onKeyUp={handleFormInputUp}
            />
            <label htmlFor="name" className={`${styles.form_label}`}>
              <span className="label_span">Your Name</span>
            </label>
          </div>
        </div>
        <div className="col-12 mb-5 row justify-content-center justify-content-lg-start">
          <div className={`col-8 ${styles.input_container}`}>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              className={`form_input ${styles.form_input} user_input`}
              onChange={handleChange}
              onFocus={handleMouseDown}
              onKeyUp={handleFormInputUp}
            />
            <label htmlFor="email" className={`${styles.form_label}`}>
              <span className="label_span">Your Email</span>
            </label>
          </div>
        </div>
        <div className="col-12 mb-3 row justify-content-center justify-content-lg-start">
          <div className={`col-8 ${styles.input_container}`}>
            <textarea
              className={`${styles.textarea_input} pb-0 z-3 bg-transparent user_input`}
              name="message"
              id="message"
              rows={1}
              value={formValues.message}
              onChange={handleChange}
              onKeyDown={handleTextAreaDown}
              onKeyUp={handleTextAreaUp}
            />
            <label
              htmlFor="name"
              className={`textarea_label ${styles.textarea_label}`}
            >
              <span className="textarea_span">Tell me about your project</span>
            </label>
          </div>
        </div>
        <div
          className="col-3 px-0 
        "
        >
          <button type="submit" className={`btn ${styles.send_btn}`}>
            <span>Send</span>
          </button>
        </div>
      </div>
    </>
  );
}
