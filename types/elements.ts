export interface IProductSubtitleProps {
  subtitleClassName?: string
  subtitleRectClassName?: string
}

export interface IProductItemActionBtnProps {
  text: string
  callback?: () => void
  iconClass: string
  marginBorrom?: number
  withTooltip?: boolean
}

export interface IProductAvailableProps {
  vendorCode: string
  inStock: number
}
