import { StaticImageData } from 'next/image'

export interface IHeroSLide {
  id?: number
  title: string
  image: StaticImageData
}

export type IHeroSLideTooltip = IHeroSLide
