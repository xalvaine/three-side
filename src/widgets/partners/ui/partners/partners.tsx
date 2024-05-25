import 'swiper/css'

import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Title } from 'shared/ui'

import Siberus from '../../assets/siberus.svg'
import ASI from '../../assets/asi.png'
import SecureT from '../../assets/secure-t.png'
import OZZ from '../../assets/ozz.png'
import CodeIB from '../../assets/code-ib.png'
import Cyberhome from '../../assets/cyberhome.svg'

import styles from './partners.module.scss'

const partners: { icon: ReactNode }[] = [
  { icon: <Siberus /> },
  { icon: <img src={ASI.src} alt='ASI' /> },
  { icon: <img src={SecureT.src} alt='Secure T' /> },
  { icon: <img src={OZZ.src} alt='OZZ' /> },
  { icon: <img src={CodeIB.src} alt='CodeIB' /> },
  { icon: <Cyberhome /> },
]

export const Partners = () => {
  return (
    <>
      <Title>
        Вместе с партнерами развиваем индустрию информационной безопасности в
        России
      </Title>
      <div className={styles.sliderWrapper}>
        <Swiper slidesPerView={1.5} spaceBetween={12} className={styles.slider}>
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
