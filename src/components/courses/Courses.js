import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Camera, Award, Brain, AlertTriangle, 
  Search, Zap, Wrench, Microscope, Package, Lightbulb, 
  Users, Target, Layers, UserCheck, CheckCircle, Focus, 
  Trophy, Instagram, Plus, Minus, Palette, TrendingUp,
  Clock, Star, Heart, Crown, Gem, Coffee, ChevronDown, ChevronUp
} from 'lucide-react';
import styles from './Courses.module.css';
import Button from '../button/Button';

const AdditionalCourses = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCourse = (courseNumber) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseNumber]: !prev[courseNumber]
    }));
  };

  const courses = [
    {
      number: 1,
      icon: <Award className={styles.sessionIcon} />,
      title: "קורס לק ג'ל מתחילות - מסלול בסיס",
      duration: "4 מפגשים | 21 שעות",
      content: [
        { text: "אנטומיה ומבנה הציפורן + פתולוגיות ומחלות נפוצות", icon: <Brain className={styles.contentIcon} /> },
        { text: "כלי עבודה בסיסיים ומבוא למניקור יבש", icon: <Wrench className={styles.contentIcon} /> },
        { text: "סטריליזציה, היגיינה וסביבת עבודה בטוחה", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "מוצרי לק ג'ל ושיטת עבודה מלאה", icon: <Package className={styles.contentIcon} /> },
        { text: "שיטת מבנה אנטומי ייחודית", icon: <Target className={styles.contentIcon} /> },
        { text: "תיקונים מקצועיים (משי, ג'ל בנייה, פוליג'ל)", icon: <CheckCircle className={styles.contentIcon} /> },
        { text: "צילום מקצועי לתיעוד העבודות", icon: <Camera className={styles.contentIcon} /> },
        { text: "תרגול מעשי על מודליסטיות אמיתיות", icon: <Users className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      icon: <TrendingUp className={styles.sessionIcon} />,
      title: "שיעור תוכן עסקי וקישוטים מתקדמים",
      duration: "מפגש אחד | 5-6 שעות",
      content: [
        { text: "מיתוג אישי ובניית אווירה בקליניקה", icon: <Crown className={styles.contentIcon} /> },
        { text: "תמחור טיפולים חכם וניהול רווחיות", icon: <TrendingUp className={styles.contentIcon} /> },
        { text: "מעקב אחר הכנסות ויעדים עסקיים", icon: <Target className={styles.contentIcon} /> },
        { text: "פתיחת וניהול אינסטגרם עסקי מקצועי", icon: <Instagram className={styles.contentIcon} /> },
        { text: "צילום מתקדם, עריכה וסטוריז מושכים", icon: <Camera className={styles.contentIcon} /> },
        { text: "ניהול יומן, תקנון ומיינדסט עצמאית", icon: <Clock className={styles.contentIcon} /> },
        { text: "קישוטים שימושיים וטכניקות מתקדמות", icon: <Palette className={styles.contentIcon} /> },
        { text: "בניית בסיס לקוחות וקשרי לקוחות", icon: <Heart className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      icon: <Crown className={styles.sessionIcon} />,
      title: "קורס מלא - מתחילות לעצמאיות",
      duration: "5 מפגשים | 27 שעות",
      content: [
        { text: "כל התוכן של הקורס הבסיס המקצועי", icon: <BookOpen className={styles.contentIcon} /> },
        { text: "שיעור תוכן עסקי מלא וקישוטים מתקדמים", icon: <Gem className={styles.contentIcon} /> },
        { text: "ליווי אישי צמוד לאורך כל המסע", icon: <UserCheck className={styles.contentIcon} /> },
        { text: "כלים שיווקיים מתקדמים לבניית עסק", icon: <TrendingUp className={styles.contentIcon} /> },
        { text: "מענה לשאלות ותמיכה גם לאחר הקורס", icon: <Heart className={styles.contentIcon} /> },
        { text: "התאמה מלאה לעבודה עצמאית רווחית", icon: <Trophy className={styles.contentIcon} /> },
        { text: "בסיס מוצק לקריירה מקצועית מצליחה", icon: <Star className={styles.contentIcon} /> },
        { text: "ביטחון מלא ויכולת עבודה מהיום הראשון", icon: <Focus className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
      icon: <Sparkles className={styles.sessionIcon} />,
      title: "קורס הרמת ריסים מקצועי",
      duration: "2 מפגשים + בונוס",
      content: [
        { text: "אנטומיית העין והריס + שלבי צמיחת הריסים", icon: <Brain className={styles.contentIcon} /> },
        { text: "בטיחות והיגיינה - מתי לא מבצעים טיפול", icon: <AlertTriangle className={styles.contentIcon} /> },
        { text: "סוגי ריסים מלאכותיים: אורכים, עוביים, תלתלים", icon: <Layers className={styles.contentIcon} /> },
        { text: "הכרת סוגי הדבקים והתאמה ללקוחה", icon: <Package className={styles.contentIcon} /> },
        { text: "סגנונות עיצוב (טבעי, בובתי, חתולי)", icon: <Palette className={styles.contentIcon} /> },
        { text: "התאמת מבנה הריסים למבנה העין", icon: <Target className={styles.contentIcon} /> },
        { text: "תרגול מלא על דוגמנית + הסרת ריסים", icon: <Users className={styles.contentIcon} /> },
        { text: "תמחור ושיווק + צילום מקצועי", icon: <Camera className={styles.contentIcon} /> },
        { text: "ערכת עבודה מקצועית + תעודת הסמכה", icon: <Award className={styles.contentIcon} /> }
      ]
    },
    {
      number: 5,
      icon: <Focus className={styles.sessionIcon} />,
      title: "קורס עיצוב גבות מקצועי",
      duration: "2 מפגשים + בונוס",
      content: [
        { text: "מבוא תיאורטי על עולם הגבות וחשיבותן בהבעת הפנים", icon: <BookOpen className={styles.contentIcon} /> },
        { text: "ניתוח צורת הפנים והתאמת סגנון לפי פרופורציות", icon: <Search className={styles.contentIcon} /> },
        { text: "שלוש טכניקות מרכזיות: פינצטה, חוט ושעווה", icon: <Wrench className={styles.contentIcon} /> },
        { text: "צביעה והתאמה לגוון העור והשיער", icon: <Palette className={styles.contentIcon} /> },
        { text: "יצירת סימטריה בגבות בעזרת חוט ומדידות מדויקות", icon: <Target className={styles.contentIcon} /> },
        { text: "שיקום ותיקון גבות דלילות או פגומות", icon: <CheckCircle className={styles.contentIcon} /> },
        { text: "הכרות עם מיקרופיגמנטציה ושיטות מתקדמות", icon: <Microscope className={styles.contentIcon} /> },
        { text: "ערכת עבודה מקצועית + תעודת הסמכה", icon: <Award className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.additionalCoursesContainer}>
      <div className={styles.additionalHeader}>
        <h1 className={styles.additionalMainTitle}>הקורסים שלנו</h1>
        <h2 className={styles.additionalSubtitle}>ריכזתי עבורך את הדרכים שלך להתחיל את הדרך שלך בעולם היופי</h2>
        <div className={styles.additionalCourseInfo}>
          <span>5 מסלולי לימוד</span>
          <span>מתחילות עד מקצועיות</span>
          <span>ליווי אישי וצמוד</span>
        </div>
        
        <div className={styles.additionalExpandButtonContainer}>
          <button 
            className={styles.additionalExpandButton} 
            onClick={toggleExpanded}
            aria-label={isExpanded ? "הסתר קורסים" : "הצג קורסים"}
          >
            {isExpanded ? (
              <>
                <Minus className={styles.additionalExpandIcon} />
                <span>לחצי כדי להסתיר את תיאור הקורסים</span>
              </>
            ) : (
              <>
                <Plus className={styles.additionalExpandIcon} />
                <span>לחצי כדי לצפות בכל הקורסים</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.additionalCoursesContainerInner}>
          {courses.map((course) => (
            <div key={course.number} className={styles.additionalCourseCard}>
              <div className={styles.additionalCourseHeader}>
                <div className={styles.additionalCourseNumber}>מסלול {course.number}</div>
                <div className={styles.additionalIconContainer}>
                  {course.icon}
                </div>
              </div>
              
              <h3 className={styles.additionalCourseTitle}>{course.title}</h3>
              
              <div className={styles.additionalCourseDetails}>
                <div className={styles.additionalDuration}>{course.duration}</div>
                <button 
                  className={styles.additionalCourseExpandButton}
                  onClick={() => toggleCourse(course.number)}
                  aria-label={expandedCourses[course.number] ? "פחות פרטים" : "עוד פרטים"}
                >
                  {expandedCourses[course.number] ? (
                    <>
                      <ChevronUp className={styles.additionalCourseExpandIcon} />
                      <span>פחות פרטים</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className={styles.additionalCourseExpandIcon} />
                      <span>עוד פרטים</span>
                    </>
                  )}
                </button>
              </div>
              
              {expandedCourses[course.number] && (
                <div className={styles.additionalContentContainer}>
                  {course.content.map((item, index) => (
                    <div key={index} className={styles.additionalContentItem}>
                      <span className={styles.additionalContentIconWrapper}>
                        {item.icon}
                      </span>
                      <span className={styles.additionalContentText}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                  
                  <Button text="נתי, קחי אותי להרשמה"/>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdditionalCourses;