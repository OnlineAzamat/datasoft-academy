import { CCarousel, CCarouselItem } from '@coreui/react';

import styles from '../styles';
import { Trans, useTranslation } from 'react-i18next';

export const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <CCarousel className="px-[5%] h-max" interval={5000} controls>
        <CCarouselItem className="max-w-[90%]">
          <div className="flex lg:flex-row flex-col gap-6 2xl:max-w-[1280px] w-full">
            <div
              className='flex-[0.5] lg:max-w-[460px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
            >
              <div className="feedback-gradient" />
              <div>
                <h4 className="font-bold sm:text-[32px] text-[26px] sm:loading-[36px] text-white">{ t("feedback_name") }</h4>
                <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">{ t("feedback_1") }</p>
              </div>
              <p className="mt-[0.5rem] font-normal text-[18px] leading-[29px] text-white">🤝 <Trans i18nKey="feedback_1-text" values={{ feedback_1_2: "DataSoft Academy" }} components={{
                1: <b className="font-extrabold text-white" />,
                3: <b className="font-extrabold text-white" />
              }} /></p>
            </div>

            <div
              className="relative flex-1 flex justify-center items-center"
            >
              <img 
                src="/feedback-2.jpg"
                alt="feedback"
                className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem className="max-w-90%]">
          <div className="flex lg:flex-row flex-col gap-6 2xl:max-w-[1280px] w-full">
            <div
              className='flex-[0.5] lg:max-w-[500px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
            >
              <div className="feedback-gradient" />
              <div>
                <h4 className="font-bold sm:text-[32px] text-[26px] sm:loading-[36px] text-white">{t("feedback_name")}</h4>
                <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">{t("feedback_1")}</p>
              </div>
              <p className="mt-[0.5rem] font-normal text-[18px] leading-[29px] text-white">👩‍💼 {t("feedback_2-text")}</p>
            </div>

            <div
              className="relative flex-1 flex justify-center items-center"
            >
              <img 
                src="/feedback-3.jpg"
                alt="feedback"
                className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </section>
  )
}
