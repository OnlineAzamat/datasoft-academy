import { TypingText } from '../components/CustomTexts';
import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import styles from '../styles/index';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className='gradient-02 z-0' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| DataSoft Academy" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal md:text-[32px] sm:text-3xl text-[20px] leading-[1.5rem] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">DataSoft Academy </span>
          <Trans i18nKey="about_text" values={{ organization: "Karakalpak Research Hub" }} components={{ 1: <b className="font-extrabold text-white" /> }} />
        </motion.p>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/arrow-down.svg'
          alt='arrow down'
          className='w-[18px] h-[18px] object-contain mt-[28px]'
        />
      </motion.div>
    </section>
  )
}

export default About;
