import styles from '../ContactForm/ContactForm.module.scss'

    export const handleMouseDown = (e) => {
        document.querySelector("#contactText").style.color = "#4b4b4b";
      };
    
    export const handleContactText = (e) => {
        const contactText = document.querySelector("#contactText");
        const userInputs = document.querySelectorAll(".user_input");    
        let check = false;
        for (const i of userInputs) {
          if (i.value) {
            contactText.style.color = "#4b4b4b";
            check = true;
          }
          if (check == false) {
            contactText.style.color = "#fff";
          }
        }
      };
    
    export const handleFormInputUp = (e) => {
        const userInputSpan = document.querySelector(`#${e.target.id} + label .label_span`);
        if (e.target.value) {
          userInputSpan.style.transform = `translateY(-130%)`;
          userInputSpan.style.fontSize = `13px`;
          userInputSpan.style.color = `#fff`;
          document.querySelector(`#${e.target.id} + label`).classList.add(`${styles.input_true}`);
        } else {
          userInputSpan.style.transform = `translateY(0)`;
          userInputSpan.style.fontSize = `16px`;
          userInputSpan.style.color = `#4b4b4b`;
        document.querySelector(`#${e.target.id} + label`).classList.remove(`${styles.input_true}`);
        }
        handleContactText(e);
      };
    
    export const handleTextAreaDown = (e) => {
        document.querySelector("#contactText").style.color = "#4b4b4b";
        e.target.style.height = "100px";
      };
    
    export const handleTextAreaUp = (e) => {
        const userMessageSpan = document.querySelector(
          `#${e.target.id} + label .textarea_span`
        );
    
        if (e.target.value) {
          userMessageSpan.style.opacity = "0";
          document.querySelector(`#message + label`).classList.add(`${styles.textarea_true}`);
        } else {
          document.querySelector(`#message`).style.height = "40px";
          document.querySelector(`#message + label`).classList.remove(`${styles.textarea_true}`);
          userMessageSpan.style.opacity = "1";
        }
        handleContactText(e);
      };

