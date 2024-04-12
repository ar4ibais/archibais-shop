'use client'

import { useGate } from 'effector-react'
import Categories from '@/components/modules/MainPage/Categories'
import Hero from '@/components/modules/MainPage/Hero'
import { MainPageGate } from '@/context/goods'
import BestsellersGoods from '@/components/modules/MainPage/BestsellersGoods'
import NewGoods from '@/components/modules/MainPage/NewGoods'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Hero />
      <Categories />
      <BestsellersGoods />
      <NewGoods />
    </main>
  )
}

export default MainPage
