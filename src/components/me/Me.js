import React from 'react';
import styles from './Me.module.css';
import nati from "../../images/נתי ונטורה תדמית.png";
import Works from '../recommends/Works';
import Brows from '../recommends/WorkEyebrow';
import Lashes from '../recommends/WorkLashes';
import Recommendations from '../recommends/Recommends';


const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני"></div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={nati} alt="נתי ונטורה" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>נעים מאוד, נתי ונטורה</h1>
          <div className={styles.subtitle}>"אכפת לי שכל תלמידה שלי תקבל את כל המעטפת שהייתה כל כך חסרה לי"</div>
          <p className={styles.description}>
            אני יודעת איך זה מרגיש כשאת מחפשת את עצמך. לפני כמה שנים גם אני הייתי במקום הזה - עבדתי בהייטק, הרגשתי שאני לא ממצה את עצמי, חיפשתי משהו שיהיה באמת שלי. מתחת לבית היה לי סטודיו קטן, אז החלטתי לנסות. נרשמתי לקורס ציפורניים, ומשם המסע התחיל.
          </p>
          <p className={styles.description}>
            אותי לא לימדו איך למשוך לקוחות, איך להתנהל עם לקוחות ואיך להתמודד עם ימים פחות טובים - אני למדתי הכל על בשרי. <br/>
            זה עלה לי בהרבה אנרגיות, זמן ובסוף - גם בכסף והבטחתי לעצמי שאני אתן לכל תלמידה שלי את המעטפת והכלים שלי היו חסרים בתחילת הדרך שלי!
          </p>
          <p className={styles.description}>
            היום, אני מנהלת קליניקה עם 6 עובדות שכולן הוכשרו על ידי. כשאני רואה בנות שמגיעות אליי עם התשוקה והרעב בעיניים להצליח - אני רואה את עצמי מלפני כמה שנים. אחת שחלמה להפוך את התחום שהיא אוהבת למקור הפרנסה שלה, אחת שמוכנה להשקיע כדי להגיע למקום שהיא באמת רוצה להיות בו. אני כאן בשביל לחסוך מכן את הטעויות שעברתי ולתת לכן את הכלים, הביטחון והליווי שיהפכו את החלום שלכן למציאות מוצלחת.
          </p>
        </div>
      </div>
<Works/>
<Brows/>
<Lashes/>
<Recommendations/>

    </>
  );
};

export default AboutMe;