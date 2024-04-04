import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import Link from 'next/link'
import CatalogMenu from '../CatalogMenu'

const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0')
    closeMenu()
    openCatalogMenu()
  }
  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href={'/'} className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.main}
        </Link>
        <button
          onClick={handleOpenCatalogMenu}
          className='btn-reset mobile-navbar__btn'
        >
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link href={'/favorites'} className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link href={'/cart'} className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          onClick={handleOpenMenu}
          className='btn-reset mobile-navbar__btn'
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  )
}

export default MobileNavbar
