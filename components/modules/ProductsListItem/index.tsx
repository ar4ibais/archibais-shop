import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { IProductsListItem } from '@/types/modules'

import ProductSubtitle from '@/components/elements/ProductsSubtitle'
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn'
import ProductAvailable from '@/components/elements/ProductAvailable'
import ProductLabel from './ProductLabel'
import { addOverflowHiddenToBody, formatPrice } from '@/lib/utils/common'
import { showQuickViewModal } from '@/context/modals'
import { setCurrentProduct } from '@/context/goods'
import styles from '@/styles/product-list-item/index.module.scss'
import stylesForAd from '@/styles/ad/index.module.scss'

const ProductsListItem = ({ item, title }: IProductsListItem) => {
  const { lang, translations } = useLang()
  const isMedia800 = useMediaQuery(800)
  const isTitleForNew = title === translations[lang].main_page.new_title

  const handleShowQuickViewModal = () => {
    addOverflowHiddenToBody()
    showQuickViewModal()
    setCurrentProduct(item)
  }
  return (
    <>
      {item.characteristics.collection === 'line' &&
      item.type === 't-shirts' ? (
        <li className={styles.list__item_ad}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_ad__inner}
          >
            <span className={`${stylesForAd.ad} ${styles.list__item_ad__ad}`}>
              {translations[lang].common.ad}
            </span>
            <ProductSubtitle
              subtitleClassName={styles.list__item_ad__subtitle}
              subtitleRectClassName={styles.list__item_ad__subtitle__rect}
            />
            <div className={styles.list__item_ad__img}>
              <Image
                src={item.images[0]}
                alt={item.name}
                fill
                objectFit='contain'
              />
            </div>
            <p className={styles.list__item_ad__title}>
              <span>
                {translations[lang].main_page.tShirt} "Line"
                {
                  //@ts-ignore
                  translations[lang].main_page[
                    item.images[0].split('/img/').join('').split('-')[0]
                  ]
                }
              </span>
              <span>{formatPrice(+item.price)} ₽</span>
            </p>
          </Link>
        </li>
      ) : (
        <li className={styles.list__item}>
          {title ? (
            <span
              className={`${styles.list__item__label} ${isTitleForNew ? styles.list__item__new : styles.list__item__bestseller}`}
            >
              {isTitleForNew
                ? translations[lang].main_page.is_new
                : translations[lang].main_page.is_bestseller}
            </span>
          ) : !item.isNew && !item.isBestseller ? (
            ''
          ) : (
            <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
          )}
          <div className={styles.list__item__actions}>
            <ProductItemActionBtn
              text={translations[lang].product.add_to_favorites}
              iconClass='actions__btn_favorite'
            />
            <ProductItemActionBtn
              text={translations[lang].product.add_to_comparison}
              iconClass='actions__btn_comparison'
            />
            {!isMedia800 && (
              <ProductItemActionBtn
                text={translations[lang].product.quick_view}
                iconClass='actions__btn_quick_view'
                callback={handleShowQuickViewModal}
              />
            )}
          </div>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item__img}
          >
            <Image
              src={item.images[0]}
              alt={item.name}
              fill
              objectFit='contain'
            />
          </Link>
          <div className={styles.list__item__inner}>
            <h3 className={styles.list__item__title}>
              <Link href={`/catalog/${item.category}/${item._id}`}>
                {item.name}
              </Link>
            </h3>
            <ProductAvailable
              vendorCode={item.vendorCode}
              inStock={+item.inStock}
            />
            <span className={styles.list__item__price}>
              {formatPrice(+item.price)} ₽
            </span>
          </div>
          <button className={`btn-reset ${styles.list__item__cart}`}>
            {translations[lang].product.to_cart}
          </button>
        </li>
      )}
    </>
  )
}

export default ProductsListItem
