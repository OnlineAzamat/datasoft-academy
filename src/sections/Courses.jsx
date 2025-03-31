import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles/index';
import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { CourseCard } from '../components/CourseCard';
import { useTranslation } from 'react-i18next';

export const Courses = () => {
  const [active, setActive] = useState('world-3');
  const { t } = useTranslation();

  const exploreCourses = [
    {
      id: 'course-1',
      imgUrl: '/course-1.webp',
      title: t("android"),
      headset: 'android'
    },
    {
      id: 'course-2',
      imgUrl: '/course-2.webp',
      title: t("computer"),
      headset: 'computer'
    },
    {
      id: 'course-3',
      imgUrl: '/course-3.webp',
      title: t('python'),
      headset: 'python'
    },
    {
      id: 'course-4',
      imgUrl: '/course-4.webp',
      title: t('frontend'),
      headset: 'frontend'
    },
    {
      id: 'course-5',
      imgUrl: '/course-5.webp',
      title: t('graphic'),
      headset: 'graphic'
    },
  ];
  
  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText 
          title={`| ${t("courses")}`}
          textStyles="text-center" 
        />
        <TitleText 
          title={<>{t("choose")}</>} 
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCourses.map((world, index) => (
            <CourseCard 
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
