import { StaticImageData } from 'next/image'
import { IProduct } from './common'

export interface IHeroSLide {
  id?: number
  title: string
  image: StaticImageData
}

export type IHeroSLideTooltip = IHeroSLide

export interface IMainPageSectionProps {
  title: string
  goods: IProduct[]
  spinner: boolean
}
