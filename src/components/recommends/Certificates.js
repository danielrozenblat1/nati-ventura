import React, { useEffect } from 'react';
import styles from './Certificates.module.css';
import ScrollReveal from 'scrollreveal';

// Import only 7 images
import work1 from "../../images/נתי ונטורה עובדות 1.png";
import work2 from "../../images/נתי ונטורה עובדות 2.png";
import work3 from "../../images/נתי ונטורה עובדות 3.png";
import work4 from "../../images/נתי ונטורה עובדות 4.png";
import work5 from "../../images/נתי ונטורה עובדות 5.png";
import work6 from "../../images/נתי ונטורה עובדות 6.png";
import work7 from "../../images/נתי ונטורה עובדות 7.png";

// Import background image
import backgroundImage from "../../images/נתי תמונה דף ראשי.png";

const Certificates = () => {
  // מערך של 7 תמונות
  const carouselImages = [
    work1, work2, work3, work4, work5, work6, work7
  ];

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.main-image-reveal', {
      distance: '100px',
      origin: 'bottom',
      duration: 1200,
      delay: 200,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      reset: false
    });

    // Reveal title with a slight delay
    ScrollReveal().reveal('.title-reveal', {
      distance: '50px',
      origin: 'top',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      opacity: 0,
      reset: false
    });

    // Reveal carousel with stagger
    ScrollReveal().reveal('.carousel-reveal', {
      distance: '80px',
      origin: 'left',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      opacity: 0,
      reset: false
    });

    // Cleanup function
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        {/* התמונה הרגילה */}
        <div className={`${styles.imageContainer} main-image-reveal`}>
          <img
            src={backgroundImage}
            alt="רחלי"
            className={styles.mainImage}
          />
        </div>
        
        {/* הקרוסלה המתוקנת */}
        <div className={`${styles.carouselContainer} carousel-reveal`}>
          <div className={styles.scrollTrack}>
            {/* יצירת מספיק העתקים כדי שהאנימציה תעבוד */}
            {Array.from({ length: 4 }).map((_, groupIndex) => (
              <div key={groupIndex} className={styles.scrollContainer}>
                {carouselImages.map((img, index) => (
                  <div key={`group-${groupIndex}-${index}`} className={styles.imageWrapper}>
                    <img
                      src={img}
                      alt={`עבודה ${index + 1}`}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;