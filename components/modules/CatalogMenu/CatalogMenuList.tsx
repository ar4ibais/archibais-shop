import { motion } from 'framer-motion'
import Link from 'next/link'

const CatalogMenuList = ({ items }: { items: string[] }) => {
  return (
    <motion.ul
      className='list-reset nav-menu__accordion'
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {items.map((title, index) => {
        return (
          <li
            key={index}
            className='nav-menu__accordion__item__list__item catalog__accordion__item__list__item'
            style={{ position: 'relative' }}
          >
            <Link
              href={'/catalog'}
              className='nav-menu__accordion__item__list__item__link'
            >
              {title}
            </Link>
          </li>
        )
      })}
    </motion.ul>
  )
}

export default CatalogMenuList
