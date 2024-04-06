'use client'

import Logo from '@/components/elements/Logo'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import Link from 'next/link'
import Menu from '../Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import CartPopup from '../CartPopup'

const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }
  const handleOpenSearch = () => {
    openSearchModal()
    addOverflowHiddenToBody()
  }
  return (
    <header className='header'>
      <div className='header__container container'>
        <button onClick={handleOpenMenu} className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              onClick={handleOpenSearch}
              className='btn-reset header__links__item__btn header__links__item__btn--search'
            ></button>
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            ></Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            ></Link>
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item header__links__item--prifile'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
