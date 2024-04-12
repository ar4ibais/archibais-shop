'use client'

import { useGate } from 'effector-react'
import Categories from '@/components/modules/MainPage/Categories'
import Hero from '@/components/modules/MainPage/Hero'
import { MainPageGate } from '@/context/goods'
import BestsellersGoods from '@/components/modules/MainPage/BestsellersGoods'
import NewGoods from '@/components/modules/MainPage/NewGoods'
import BrandLife from '@/components/modules/MainPage/BrandLife'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Hero />
      <Categories />
      <BestsellersGoods />
      <NewGoods />
      <BrandLife />
    </main>
  )
}

export default MainPage
