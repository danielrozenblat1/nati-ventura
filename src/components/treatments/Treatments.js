import { useState } from 'react';
import styles from './Treatments.module.css';

import hair1 from "../../images/נתי ונטורה שיטת השערה 1.png";
import hair2 from "../../images/נתי ונטורה שיטת השערה 2.png";
import hair3 from "../../images/נתי ונטורה שיטת השערה 3.png";
import hair4 from "../../images/נתי ונטורה שיטת השערה 4.png";
import hair5 from "../../images/נתי ונטורה שיטת השערה 5.png";
import hair6 from "../../images/נתי ונטורה שיטת השערה 6.png";


import nails1 from "../../images/נתי ונטורה עבודות ציפורניים 1.png";
import nails2 from "../../images/נתי ונטורה עבודות ציפורניים 2.png";
import nails3 from "../../images/נתי ונטורה עבודות ציפורניים 3.png";
import nails4 from "../../images/נתי ונטורה עבודות ציפורניים 4.png";
import nails5 from "../../images/נתי ונטורה עבודות ציפורניים 5.png";
import nails6 from "../../images/נתי ונטורה עבודות ציפורניים 6.png";

import lashes1 from "../../images/נתי ונטורה הרמת ריסים 1.png";
import lashes2 from "../../images/נתי ונטורה הרמת ריסים 2.png";
import lashes3 from "../../images/נתי ונטורה הרמת ריסים 3.png";
import lashes4 from "../../images/נתי ונטורה הרמת ריסים 4.png";

const MyServices = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  const services = [
    {
      id: 1,
      title: "מיקרופיגמנטציה בשיטת השערה",
      description: "עיצוב וצביעת גבות בטכניקה מתקדמת בשיטת השערה הטבעית",
      suitableFor: ["למי שיש לו גבות דלילות או חסרות", "למי שרוצה צורת גבות מעוצבת ומושלמת", "למי שמתעייף מהתאמת גבות יומית", "למי שרוצה מראה טבעי וזמין תמיד"],
      problemSolved: ["יוצר מראה גבות מושלם וטבעי לתקופה ארוכה", "חוסך זמן יומי ומעניק צורה מדויקת", "מחזיר ביטחון עצמי ותחושת מושלמות"],
      duration: "90-120 דקות",
      image: hair1,
      galleryImages: [hair1, hair2, hair3, hair4, hair5, hair6]
    },
    {
      id: 2,
      title: "ציפורניים",
      description: "טיפולי ציפורניים מקצועיים לידיים ורגליים",
      suitableFor: ["למי שרוצה ציפורניים מעוצבות ויפות", "למי שיש לו בעיות ציפורניים", "למי שמחפש טיפוח קבוע", "למי שרוצה מראה מושלם לאירועים"],
      problemSolved: ["מטפל בבעיות ציפורניים ויוצר מראה מושלם", "מחזק ומשפר את בריאות הציפורניים", "מעניק תחושת פינוק ויופי"],
      duration: "45-90 דקות",
      image: nails1,
      galleryImages: [nails1, nails2, nails3, nails4, nails5, nails6]
    },
    {
      id: 3,
      title: "הרמת ריסים",
      description: "הרמה וצביעת ריסים לעיניים מרשימות",
      suitableFor: ["למי שיש לו ריסים ישרים או שטוחים", "למי שרוצה מראה עיניים פתוח יותר", "למי שמתעייף ממסקרה יומית", "למי שרוצה לחסוך זמן בשגרת האיפור"],
      problemSolved: ["מרים ומעוקל ריסים לתקופה ארוכה", "פותח את העיניים ויוצר מבט מרשים", "חוסך זמן יומי ומעניק מראה טבעי"],
      duration: "60-75 דקות",
      image: lashes1,
      galleryImages: [lashes1, lashes2, lashes3, lashes4]
    },
    {
      id: 4,
      title: "עיצוב גבות",
      description: "עיצוב מקצועי של הגבות לפי צורת הפנים",
      suitableFor: ["למי שרוצה צורת גבות מושלמת", "למי שיש לו גבות לא מעוצבות", "למי שמחפש מראה מסודר ומושלם", "למי שרוצה להדגיש את יופי העיניים"],
      problemSolved: ["יוצר צורת גבות מושלמת לפי צורת הפנים", "מסדר ומעצב את הגבות בצורה מקצועית", "מחזיר ביטחון עצמי ומראה מושלם"],
      duration: "30-45 דקות",
      image: null,
      galleryImages: []
    }
  ];

  const toggleDrawer = (serviceId) => {
    setOpenDrawer(openDrawer === serviceId ? null : serviceId);
  };

  const generateWhatsAppLink = (title) => {
    const message = encodeURIComponent(`היי עידית הגעתי מהדף, אשמח לשמוע עוד על ${title}`);
    return `https://wa.me/972527752556?text=${message}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.servicesWrapper}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceItem}>
            <div 
              className={styles.serviceHeader}
              onClick={() => toggleDrawer(service.id)}
            >
              <div className={styles.headerContent}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <div className={styles.toggleIcon}>
                  {openDrawer === service.id ? '−' : '+'}
                </div>
              </div>
            </div>

            <div className={`${styles.drawerContent} ${openDrawer === service.id ? styles.open : ''}`}>
              <div className={styles.serviceDetails}>
                <div className={styles.detailItem}>
                  <strong>למי זה מתאים:</strong>
                  <ul className={styles.detailList}>
                    {service.suitableFor.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailItem}>
                  <strong>איזה בעיה הוא פותר:</strong>
                  <ul className={styles.detailList}>
                    {service.problemSolved.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailItem}>
                  <strong>אורך טיפול:</strong>
                  <span className={styles.duration}>{service.duration}</span>
                </div>

                <div className={styles.galleryContainer}>
                  <h4>גלריית תמונות:</h4>
                  <div className={styles.imageGallery}>
                    {service.galleryImages.map((img, index) => (
                      <div key={index} className={styles.galleryImage}>
                        <img src={img} alt={`${service.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a
                    href={generateWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    לעוד פרטים
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;