import React from 'react';
import styles from './RecommendsBrows.module.css';


// Import your images
import result1 from "../../images/נתי ונטורה הרמת ריסים 1.png";
import result2 from "../../images/נתי ונטורה הרמת ריסים 2.png";
import result3 from "../../images/נתי ונטורה הרמת ריסים 3.png";
import result4 from "../../images/נתי ונטורה הרמת ריסים 4.png";



const Lashes = () => {
  const images = [
    result1, result2, result3, result4, 

  ];

  return (
    <>
      <div className={styles.title}>
הרמת ריסים
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Lashes;