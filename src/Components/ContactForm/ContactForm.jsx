import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
"./ContactFormFunctions.jsx";

export default function ContactForm() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFocused, setIsFocused] = useState('')

  const handleChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };


  const handleIsFocused = (e) => {
    setIsFocused(e.target.name)
  }

  const handleIsBlur = () => {
    setIsFocused(false)
  }

  return (
    <>
      <div
        className={`row container position-relative ${styles.form_container} pb-5 pb-md-0`}
      >
        <div id="contactText" className={`col ${styles.contact_text}`}
          style={{ color: (isFocused || Object.values(formValues).some(value => value.trim() !== '')) && "#616161" }}>
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
              className={`form_input ${styles.form_input} user_input`}
              type="text"
              name="name"
              id="name"
              aria-label="Your name"
              value={formValues.name}
              onChange={handleChange}
              onFocus={handleIsFocused}
              onBlur={handleIsBlur}

            />
            <label htmlFor="name" className={`${styles.form_label}`}>
              <span className={`label_span ${(formValues.name || isFocused == "name") && styles.label_transition}`}>Your Name</span>
            </label>
            <span className={`${styles.label_line} ${(formValues.name || isFocused == "name") && "end-0"}`}></span>
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
              onFocus={handleIsFocused}
              onBlur={handleIsBlur}
            />
            <label htmlFor="email" className={`${styles.form_label}`}>
              <span className={`label_span ${(formValues.email || isFocused == "email") && styles.label_transition}`}>Your Email</span>
            </label>
            <span className={`${styles.label_line} ${(formValues.name || isFocused == "email") && "end-0"}`}></span>
          </div>
        </div>
        <div className="col-12 mb-3 row justify-content-center justify-content-lg-start">
          <div className={`col-8 ${styles.input_container}`}>
            <textarea
              className={`user_input ${styles.textarea_input} pb-0 z-3 bg-transparent`}
              style={{ height: formValues.message ? "100px" : "40px" }}
              name="message"
              id="message"
              rows={1}
              value={formValues.message}
              onChange={handleChange}
              onFocus={handleIsFocused}
              onBlur={handleIsBlur}
            />
            <label
              htmlFor="name"
              className={`textarea_label ${styles.textarea_label}`}
            >
              <span className={`label_span textarea_span ${formValues.message && "opacity-0"}`}>Tell me about your project</span>
            </label>

            <span className={`${styles.label_line} ${(formValues.message || isFocused == "message") && "end-0"}`}></span>

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
