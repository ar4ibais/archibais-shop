'use client'

import { useUnit } from 'effector-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header'
import MobileNavbar from '../modules/MobileNavbar'
import { $searchModal } from '@/context/modals'
import { AnimatePresence, motion } from 'framer-motion'
import SearchModal from '../modules/SearchModal'
import { handleCloseSearchModal } from '@/lib/utils/common'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($searchModal)
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
        <div
          onClick={handleCloseSearchModal}
          className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
        ></div>
      </AnimatePresence>
    </>
  )
}

export default Layout
