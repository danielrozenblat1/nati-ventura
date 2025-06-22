import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"
import MyServices from "../components/treatments/Treatments"
import styles from "./FifthScreen.module.css"

const FifthScreen = () => {
    return <>
        <div className={styles.title} id="טיפולים">הטיפולים שלנו</div>
        <div className={styles.description}>
     אלה כל הטיפולים שתוכלי מצוא אצלנו בקליניקה - לחצי על כל טיפול כדי לקבל פירוט עליו
        </div>
     <MyServices/>
    </>
}

export default FifthScreen