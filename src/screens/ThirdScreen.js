import IconTextComponent from "../components/can/Can"
import styles from "./ThirdScreen.module.css"
import brain from "../icons/wired-outline-426-brain-hover-pinch.json"
import keep from "../icons/wired-outline-1776-staircase-running-hover-running.json"
import patience from "../icons/wired-outline-628-yoga-female-hover-pinch (1).json"
import NewBox from "../components/newBox/NewBox"
import AdditionalCourses from "../components/courses/Courses"

const ThirdScreen = () => {
   return <>
   

    
       <div className={styles.title}>חשוב לי שתדעי</div>
       <div className={styles.description}>תחום הביוטי הוא אחד התחומים הכי מתגמלים היום בשוק עם ביקוש שלא ייגמר</div>
       <div className={styles.title}>אבל לא כולן יכולות להצליח בו!</div>
       <div className={styles.description}>אם את רוצה להצליח בתחום הביוטי זה ידרוש ממך</div>
       <div className={styles.row}>
           <NewBox 
               title="נחישות" 
               description="יהיו ימים קשים, תקופות של ספקות ורגעים שתרצי לוותר. אבל בדיוק אז את תבחני מה באמת חשוב לך ותמשיכי קדימה למרות הכל" 
               icon={brain}
           />
           <NewBox 
               title="התמדה וסבלנות" 
               description="יומן מלא לא מגיע בדרך קסם ולא בן לילה. זו עבודה יום יומית, תרגול מתמיד ואמונה בתהליך. רק מי שתעמוד בקצב הזה ותבין שבתחום הזה זו ריצת מרתון ולא ספרינט תראה איך החלומות הופכים למציאות" 
               icon={keep}
           />
           <NewBox 
               title="מנטליות של מנצחת" 
               description="לא לפחד מאתגרים, לא להתחבא מעבודה קשה ולא להיכנע לדעות של אחרים. את כאן כדי לנצח ולהראות לעולם מה את מסוגלת לעשות" 
               icon={patience}
           />
       </div>

        
        <div className={styles.title}>וכדי להיות באמת בטוחה שהתחום בשבילך</div>
     
   </>
}

export default ThirdScreen