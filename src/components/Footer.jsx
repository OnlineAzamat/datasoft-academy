import { motion } from 'framer-motion';
import { socials } from '../constants/index';

import styles from '../styles/index';
import { footerVariants } from '../utils/motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col sm:gap-8 gap-4`}>
        <div className="flex items-center justify-between flex-wrap sm:gap-5">
          <h4 className="font-bold md:text-[64px] text-[34px] max-sm:text-2xl text-white">{ t("enter") }</h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTjincP3rEqUggJ11pxJjwpDUB89fQFQLKSLlaUr1gZhJJEg/viewform?usp=header" target="_blank" className="no-underline">
            <button type="button" className="flex items-center h-fit sm:py-4 py-2 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
              <span className="font-normal text-[16px] text-white">DATASOFT Academy</span>
            </button>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="sm:mb-[50px] mb-6 h-[2px] bg-white opacity-10"/>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">DataSoft Academy</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright &copy; 2020-2025 DataSoft Academy. {t("copyright")}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.link} key={social.name}>
                <img 
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
