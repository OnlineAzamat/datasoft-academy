import styles from '../styles';

export const StartSteps = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <p className="font-bold text-[20px] text-white m-0">0{number}</p>
      </div>
      <p className='flex-1 ml-[30px] max-sm:ml-4 font-normal text-[18px] max-md:text-2xl max-sm:text-xl text-[#b0b0b0] leading-[32px]'>{text}</p>
    </div>
  )
}
