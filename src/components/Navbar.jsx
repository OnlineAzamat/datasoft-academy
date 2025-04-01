import { useState } from 'react';
import { motion } from 'framer-motion';
import { changeLanguage } from 'i18next';

import { navVariants } from '../utils/motion';
import styles from '../styles/index';

const Navbar = () => {
  const [selLang, setSetselectedLang] = useState(window.localStorage.getItem('siteLang') || 'en');

  const handleChangeLanguage = (e) => {
    setSetselectedLang(e.target.value);
    changeLanguage(e.target.value);
    window.localStorage.setItem("siteLang", e.target.value);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        <img src="/logo.png" alt="search" className='w-[220px] max-md:w-[150px] object-contain z-50' />
        <h2 className='font-extrabold md:text-[24px] text-xl leading-[30px] text-white max-sm:hidden'>Biybinaz Turemuratova</h2>
        <div className="flex gap-2 max-md:flex-wrap">
          <button className={`md:p-2 p-1 rounded-md duration-300 hover:bg-[#323f5d14] ${selLang === "en" && "bg-[#323f5d44]"}`} onClick={handleChangeLanguage} value="en" title='English'>En</button>
          <button className={`md:p-2 p-1 rounded-md duration-300 hover:bg-[#323f5d14] ${selLang === "ru" && "bg-[#323f5d44]"}`} onClick={handleChangeLanguage} value="ru" title="Русскый">Ру</button>
          <button className={`md:p-2 p-1 rounded-md duration-300 hover:bg-[#323f5d14] ${selLang === "uz" && "bg-[#323f5d44]"}`} onClick={handleChangeLanguage} value="uz" title="O'zbekcha">O'z</button>
          <button className={`md:p-2 p-1 rounded-md duration-300 hover:bg-[#323f5d14] ${selLang === "kaa" && "bg-[#323f5d44]"}`} onClick={handleChangeLanguage} value="kaa" title="Qaraqalpaqsha">Qq</button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar;