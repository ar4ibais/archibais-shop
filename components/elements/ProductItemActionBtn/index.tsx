import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tooltip from '../Tooltip'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/product-item-action-btn/index.module.scss'
import TooltipStyles from '@/styles/tooltip/index.module.scss'
import { IProductItemActionBtnProps } from '@/types/elements'

const ProductItemActionBtn = ({
  text,
  callback,
  iconClass,
  marginBorrom,
  withTooltip = true,
}: IProductItemActionBtnProps) => {
  const [open, setOpen] = useState(false)
  const [tooltipLeft, setTooltipLeft] = useState(0)
  const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>

  const showTooltip = () => setOpen(true)
  const hideTooltip = () => setOpen(false)

  useEffect(() => {
    if (open && withTooltip) {
      setTooltipLeft(tooltipRef.current?.clientWidth)
    }
  }, [open, withTooltip])
  return (
    <div className={styles.actions}>
      <button
        className={`btn-reset ${styles.actions__btn} ${styles[iconClass]}`}
        onClick={callback}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ marginBottom: marginBorrom || 16 }}
      ></button>
      {withTooltip && (
        <AnimatePresence>
          {open && (
            <motion.div
              className={TooltipStyles.tooltip}
              ref={tooltipRef}
              style={{ left: `-${tooltipLeft + 13}px` }}
              {...basePropsForMotion}
            >
              <Tooltip text={text} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export default ProductItemActionBtn
