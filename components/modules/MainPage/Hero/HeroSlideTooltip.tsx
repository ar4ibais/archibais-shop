import React from 'react'
import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import { IHeroSLideTooltip } from '@/types/main-page'

const HeroSlideTooltip = ({ image, title }: IHeroSLideTooltip) => {
  return (
    <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
      <span className={styles.hero__slider__slide__popup__arrow} />
      <Image
        className={styles.hero__slider__slide__popup__img}
        src={image}
        alt={title}
      />
      <p className={styles.hero__slider__slide__popup__inner}>
        <b className={styles.hero__slider__slide__popup__title}>{title}</b>
        <span className={styles.hero__slider__slide__popup__price}>
          {' '}
          800 P.
        </span>
      </p>
    </div>
  )
}

export default HeroSlideTooltip
