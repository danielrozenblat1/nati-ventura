import React from 'react';
import { Link } from 'react-scroll';
import styles from './FirstScreen.module.css';
import natiImage from "../images/נתי ונטורה תמונה ראשית.png"; // החלף עם הנתיב לתמונה שלך

const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainTextInner}>
            <p className={styles.mainText}>
              לאחר אלפי לקוחות ועשור בתחום היופי 
            </p>
          </div>
        </div>
        
        <div className={styles.titleContainer}>
          <div className={styles.levelUpContainer}>
            <span className={styles.levelUpText}>NATI VENTURA ACADEMY</span>
          </div>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitleText}>
             האקדמיה שתפתח לך דלת לקריירה רווחית בעולם היופי
            </p>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={natiImage} alt="נתי ונטורה אקדמיה" className={styles.image} />
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <Link 
            to="קורסים"
            smooth={true}
            duration={1500}
            offset={-150}
            className={styles.button}
          >
            אני רוצה לשמוע על הקורסים
          </Link>
          <Link 
            to="טיפולים"
            smooth={true}
            duration={1500}
            offset={-150}
            className={styles.button}
          >
            אני רוצה לשמוע על הטיפולים שלכן
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;