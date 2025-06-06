import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import styles from "../styles/index";
import { useTranslation } from "react-i18next";

export const CourseCard = ({ id, imgUrl, title, index, active, handleClick, headset }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img 
        src={imgUrl} 
        alt={title} 
        className="absolute w-full h-full object-cover rounded-[24px] max-sm:opacity-50"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] max-md:rounded-[24px]">
          <a href="https://forms.gle/cbLp8wa77entY43z5" target="_blank">
            <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
              <img 
                src={`/${headset}.png`}
                alt="headset"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </a>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">{ t('enter') }</p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  )
}