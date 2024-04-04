import { ICatalogMenuButtonProps } from '@/types/modules'

const CatalogMenuButton = ({
  name,
  isActive,
  handler,
}: ICatalogMenuButtonProps) => {
  return (
    <button
      onClick={handler}
      className='btn-reset catalog-menu__list__item__btn'
      style={{ color: isActive ? '#e8e9ea' : '#777c85' }}
    >
      {name}
    </button>
  )
}

export default CatalogMenuButton
