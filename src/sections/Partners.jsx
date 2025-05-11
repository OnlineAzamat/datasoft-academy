import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import PartnerCard from "../components/PartnerCard";

import styles from "../styles";

export const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Emblem_of_Karakalpakstan.svg/330px-Emblem_of_Karakalpakstan.svg.png',
      title: t("partners_partner1")
    },
    {
      imgUrl: '/logo.png',
      title: t("partners_partner2"),
      link: 'https://womansoul.uz/'
    }
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("partners_slug")}`} textStyles="text-center" />
        <TitleText title={t("partners_title")} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px] max-sm:gap-0">
          {partners.map((insight, index) => (
            <PartnerCard 
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
