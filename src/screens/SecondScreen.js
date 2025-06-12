import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import coins from "../icons/wired-lineal-298-coins-loop-spin (2).json"
import business from "../icons/wired-lineal-187-suitcase-morph-open (5).json"
import time from "../icons/wired-lineal-1334-order-history-hover-pinch (1).json"
import wake from "../icons/wired-lineal-804-sun-morph-night.json"
const SecondScreen=()=>{

  return <> 
  <div className={styles.title}>בואי נדבר תכלס</div>
<div className={styles.description}>את כאן מסיבה אחת בלבד - את אוהבת את תחום הביוטי ומכירה את היתרונות שהוא מביא איתו</div>
<div className={styles.row}>
<SmallBox text="שעת עבודה שלך שווה הרבה יותר ממינימום" icon={coins}/>
<SmallBox text="את הופכת לבוסית של עצמך" icon={business}/>
</div>
<div className={styles.row}>
<SmallBox text="את מנהלת את הזמן שלך בעצמך " icon={time}/>
<SmallBox text="לקום וללכת לישון כשאת עושה רק מה שאת אוהבת" icon={wake}/>
</div>
  <div className={styles.title}>ולאחרונה..</div>
  <div className={styles.description}>התחלת להתעניין יותר ברצינות והחלטת להפוך את התשוקה שלך לקריירה</div>
    <div className={styles.title}>אז אני כאן כדי לומר לך שזה אפשרי!</div>
  
    </>

}
export default SecondScreen