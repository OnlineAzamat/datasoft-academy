import { motion } from "framer-motion"

import { fadeIn } from "../utils/motion"

export default function PartnerCard({ imgUrl, title, subtitle, link, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img src={imgUrl} alt="planet-01" className="md:w-[370px] w-full h-[250px] rounded-[32px]" />
      <div className="w-full flex justify-between items-center">
        <div className="md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        </div>
        {
          link && <a href={link} className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white transition-all hover:scale-105"><img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" /></a>
        }
      </div>
    </motion.div>
  )
}