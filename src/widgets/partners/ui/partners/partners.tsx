import 'swiper/css'

import { ReactNode, useState } from 'react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { Title } from 'shared/ui'
import { useIsDesktop } from 'shared/lib'

import Siberus from '../../assets/siberus.svg'
import ASI from '../../assets/asi.svg'
import SecureT from '../../assets/secure-t.svg'
import OZZ from '../../assets/ozz.svg'
import CodeIB from '../../assets/code-ib.svg'
import StartX from '../../assets/startx.svg'
import Cyberhome from '../../assets/cyberhome.svg'
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'

import styles from './partners.module.scss'
import classNames from 'classnames'

const partners: { icon: ReactNode }[] = [
  { icon: <Siberus height='30%' /> },
  { icon: <ASI height='50%' /> },
  { icon: <SecureT height='40%' /> },
  { icon: <OZZ height='30%' /> },
  { icon: <CodeIB height='35%' /> },
  { icon: <StartX height='25%' /> },
  { icon: <Cyberhome height='30%' /> },
]

export const Partners = () => {
  const { isDesktop } = useIsDesktop()
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Title>
        Вместе с партнерами развиваем индустрию информационной безопасности в
        России
      </Title>
      <div className={styles.sliderWrapper}>
        <button
          disabled={activeIndex === 0}
          className={classNames(styles.button, styles.buttonLeft)}
          onClick={() => swiper?.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          disabled={activeIndex === partners.length - 4}
          className={classNames(styles.button, styles.buttonRight)}
          onClick={() => swiper?.slideNext()}
        >
          <ChevronRight />
        </button>
        <Swiper
          slidesPerView={isDesktop ? 4 : 1.5}
          spaceBetween={12}
          className={styles.slider}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {partners.map(({ icon }, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {icon}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
