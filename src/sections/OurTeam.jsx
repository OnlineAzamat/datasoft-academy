import { motion } from 'framer-motion';
import { CCarousel, CCarouselItem } from '@coreui/react';

import styles from '../styles/index';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { Teams } from '../components/Teams';

import '@coreui/coreui/dist/css/coreui.min.css'
import { useTranslation } from 'react-i18next';

export const OurTeam = () => {
  const { t } = useTranslation();

  const teamValues = [
    {
      title: '🌟 ' + t("team_item_1-title"),
      subtitle: t("team_item_1-text"),
    },
    {
      title: '🤝 ' + t("team_item_2-title"),
      subtitle: t("team_item_2-text"),
    },
    {
      title: '🌍 ' + t("team_item_3-title"),
      subtitle: t("team_item_3-text"),
    },
    {
      title: '💡 ' + t("team_item_4-title"),
      subtitle: t("team_item_4-text"),
    },
    {
      title: '✨ ' + t("team_item_5-title"),
      subtitle: t("team_item_5-text"),
    },
    {
      title: '🚀 ' + t("team_item_6-title"),
      subtitle: t("team_item_6-text"),
    },
    {
      title: '💬 ' + t("team_item_7-title"),
      subtitle: t("team_item_7-text"),
    },
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={`| ${t("team_slug")}`} />
          <TitleText title={`${t("team_title")}`} />
          <CCarousel className='mt-[48px] min-h-[270px] border-4 max-sm:border-none border-secondary-white rounded-3xl flex gap-[24px]' controls>
            {
              teamValues.map((feature) => (
                <CCarouselItem className="flex-1 flex flex-col" key={feature.title}>
                  <Teams 
                    {...feature}
                  />
                </CCarouselItem>
              ))
            }
          </CCarousel>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img 
            src="/team.webp" 
            alt="team" 
            className="w-[90%] h-[90%] object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
