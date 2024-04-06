import { useLang } from '@/hooks/useLang'
import { handleCloseSearchModal } from '@/lib/utils/common'

const SearchModal = () => {
  const { lang, translations } = useLang()

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.classList.add('with_value')
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      return
    }
    e.target.classList.remove('with_value')
  }
  return (
    <div className='search-modal'>
      <button
        onClick={handleCloseSearchModal}
        className='btn-reset search-modal__close'
      ></button>
      <h3 className='search-modal__title'>
        {translations[lang].header.search_products}
      </h3>
      <div className='search-modal__top'>
        <label className='search-modal__label'>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className='search-modal__input'
            type='text'
          />
          <span className='search-modal__floating_label'>
            {translations[lang].header.search_infos}
          </span>
        </label>
      </div>
    </div>
  )
}

export default SearchModal
