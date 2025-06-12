import React from 'react';
import styles from './FirstScreen.module.css';
import natiImage from "../images/נתי ונטורה תמונה ראשית.png"; // החלף עם הנתיב לתמונה שלך

const FirstScreen = () => {
  // Function to scroll to form
  const scrollToForm = () => {
    const formSection = document.getElementById("טופס");
    if (formSection) {
      window.scrollTo({
        top: formSection.offsetTop - 150,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll 150px down
  const scrollDown = () => {
    window.scrollTo({
      top: window.pageYOffset + 150,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainTextInner}>
            <p className={styles.mainText}>
              לאחר אלפי לקוחות ועשור בתחום היופי <br/> נתי ונטורה מציגה:
            </p>
          </div>
        </div>
        
        <div className={styles.titleContainer}>
          <div className={styles.levelUpContainer}>
            <span className={styles.levelUpText}>NATI VENTURA ACADEMY</span>
          </div>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitleText}>
             אקדמיה שתפתח לך דלת לקריירה רווחית בעולם היופי
            </p>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={natiImage} alt="נתי ונטורה אקדמיה" className={styles.image} />
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={scrollToForm}
          >
            נתי, בואי נדבר
          </button>
          <button 
            className={styles.button}
            onClick={scrollDown}
          >
            ספרי לי עוד קצת
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;