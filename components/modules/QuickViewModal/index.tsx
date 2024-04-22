import { closeQuickViewModal } from '@/context/modals'
import { formatPrice, removeOverflowHiddenFromBody } from '@/lib/utils/common'
import QuickViewModalSlider from './QuickViewModalSlider'
import { useCartAction } from '@/hooks/useCartAction'
import { useProductImages } from '@/hooks/useProductImages'
import { useLang } from '@/hooks/useLang'
import ProductAvailable from '@/components/elements/ProductAvailable'
import ProductColor from '../ProductsListItem/ProductColor'
import ProductComposition from '../ProductsListItem/ProductComposition'
import ProductSizeTableBtn from '../ProductsListItem/ProductSizeTableBtn'
import ProductSizesItem from '../ProductsListItem/ProductSizesItem'
import styles from '@/styles/quick-view-modal/index.module.scss'
import stylesForProduct from '@/styles/product-list-item/index.module.scss'
import ProductCounter from '../ProductsListItem/ProductCounter'

const QuickViewModal = () => {
  const { translations, lang } = useLang()
  const { product, selectedSize, setSelectedSize } = useCartAction()
  const images = useProductImages(product)

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  return (
    <div className={styles.modal}>
      <button
        className={`btn-reset ${styles.modal__close}`}
        onClick={handleCloseModal}
      />
      <div className={styles.modal__left}>
        <QuickViewModalSlider images={images} />
      </div>
      <div className={styles.modal__right}>
        <h3 className={styles.modal__right__title}>{product.name}</h3>
        <div className={styles.modal__right__price}>
          {formatPrice(+product.price)} $
        </div>
        <div className={styles.modal__right__info}>
          <ProductAvailable
            vendorCode={product.vendorCode}
            inStock={+product.inStock}
          />
          <ProductColor color={product.characteristics.color} />
          {product.characteristics?.composition && (
            <ProductComposition
              composition={product.characteristics.composition}
            />
          )}
          {Object.keys(product.sizes).length ? (
            <div className={styles.modal__right__info__size}>
              <div className={styles.modal__right__info__size__inner}>
                <span className={styles.product__size_title}>
                  {translations[lang].catalog.size}
                </span>
                <ProductSizeTableBtn
                  sizes={product.sizes}
                  type={product.type}
                  className={`sizes-table-btn ${styles.modal__right__info__sizes_btn}`}
                />
              </div>
              <ul className={`list-reset ${styles.modal__right__info__sizes}`}>
                {Object.entries(product.sizes).map(([key, value], i) => (
                  <ProductSizesItem
                    key={i}
                    currentSize={[key, value]}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    currentCartItems={[]}
                  />
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
          <div className={styles.modal__right__bottom}>
            <span className={stylesForProduct.product__count_title}>
              {translations[lang].product.count}
            </span>
            <div className={styles.modal__right__bottom__inner}>
              {!!selectedSize ? (
                <ProductCounter
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  count={0}
                />
              ) : (
                <div
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  style={{ justifyContent: 'center' }}
                >
                  <span>{translations[lang].product.total_in_cart} 0</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
