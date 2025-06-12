import React from 'react';
import styles from './WhoFits.module.css';
import { FaCheck, FaTimes, FaStar, FaUserShield, FaRocket, FaHandshake, FaHeart, FaFire } from 'react-icons/fa';

const EligibilitySection = () => {
  // מי מתאים להכנס לתחום
  const eligibleList = [
    {
      text: "מי שיש לה תשוקה לתחום היופי אבל עדיין לא עשתה עם זה שום דבר",
      icon: <FaHeart className={styles.icon} />
    },
    {
      text: "מי שמחפשת את עצמה ורוצה לבנות קריירה משמעותית",
      icon: <FaStar className={styles.icon} />
    },
    {
      text: "מי שמודעת ליתרונות הכלכליים בתחום ומוכנה להשקיע מאמץ",
      icon: <FaRocket className={styles.icon} />
    },
    {
      text: "מי שמוכנה לעבוד קשה, לתרגל ולהתמיד גם בימים קשים",
      icon: <FaUserShield className={styles.icon} />
    },
    {
      text: "מי שרוצה עצמאות במקום עבודה 9-17 עם בוס על הראש",
      icon: <FaFire className={styles.icon} />
    },
    {
      text: "מי שמרגישה שהיא לא ממצה את עצמה ורוצה שינוי אמיתי בחיים",
      icon: <FaHandshake className={styles.icon} />
    }
  ];

  // מי לא מתאים להכנס לתחום
  const nonEligibleList = [
    {
      text: "מי שמחפשת פתרונות קסם ולא מוכנה להשקיע עבודה אמיתית",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שלא מוכנה לנשוך שפתיים ולהמשיך ברגעי משבר",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שנוטה לוותר לעצמה ולא נחושה להצליח",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שמפחדת לקפוץ למים ולא מוכנה לקחת סיכונים",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שלא מוכנה להתמיד ולהכנע למשברים במקום להמשיך",
      icon: <FaTimes className={styles.iconNegative} />
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2 className={styles.title}>למי מתאים להכנס לתחום</h2>
          <div className={styles.line}></div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>למי לא מתאים להכנס לתחום</h2>
          <div className={styles.lineNegative}></div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={styles.listItemNegative}>
                <div className={styles.iconWrapperNegative}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;