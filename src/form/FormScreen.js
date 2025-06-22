import { useRef, useState } from 'react';
import styles from './FormScreen.module.css';

const FormScreen = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  const reasonRef = useRef('');

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "";

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const email = emailRef?.current?.value;
    const reason = reasonRef?.current?.value;


    if (name.trim().length <= 2) {
      alert("אנא הכניסי שם מלא ");
      return;
    }
    if (phone.trim().length !== 10) {
      alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ");
      return;
    }
    if (!email.includes("@")) {
      alert("אנא הכניסי מייל תקין ");
      return;
    }
    if (reason.trim().length <= 2) {
      alert("אנא הכניסי סיבת פנייה ");
      return;
    }

    const serverData = {
      name,
      phone,
      email,
      reason,
      reciver
    };

    console.log("🔄 שלב 2: הכנה לשליחה");
    console.log("📤 serverData:", serverData);

    setIsSubmitting(true);

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serverData)
      });

      console.log("✅ שלב 3: התקבלה תגובה מהשרת");
      console.log("🖥️ server response status:", serverResponse.status);

      const serverText = await serverResponse.text();
      console.log("🖥️ server response text:", serverText);

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after 2 seconds
        setTimeout(() => {
          nameRef.current.value = "";
          phoneRef.current.value = "";
          emailRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
        }, 2000);
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("❌ שגיאה:", error);
      alert("התרחשה שגיאה, אנא נסי שוב מאוחר יותר");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.title} id="טופס">{props.title}</div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={submitHandler}>
          <input
            type="text"
            className={styles.input}
            placeholder="שם מלא"
            ref={nameRef}
            disabled={isSubmitting || submitted}
          />
          <input
            type="tel"
            className={styles.input}
            placeholder="מספר טלפון"
            ref={phoneRef}
            disabled={isSubmitting || submitted}
          />
          <input
            type="email"
            className={styles.input}
            placeholder="מייל"
            ref={emailRef}
            disabled={isSubmitting || submitted}
          />
          <select
            className={styles.input}
            ref={reasonRef}
            defaultValue=""
            disabled={isSubmitting || submitted}
          >
            <option value="" disabled>בחרי סיבת פנייה</option>
            <option value="קורס ציפורניים">קורס ציפורניים</option>
            <option value="קורס איפור קבוע">קורס איפור קבוע</option>
            <option value="קורס עיצוב גבות">קורס עיצוב גבות</option>
            <option value="מתלבטת בין כל הקורסים">מתלבטת בין כל הקורסים</option>
          </select>
          <button 
            type="submit" 
            className={`${styles.button} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? 'טוען...' : submitted ? 'נשלח' : 'נתי, צרי איתי קשר'}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormScreen;