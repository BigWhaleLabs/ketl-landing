import {
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const headerText = classnames(
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(
  textColor('text-blue-default'),
  textAlign('text-right'),
  fontWeight('font-bold'),
  fontSize('text-5xl', 'md:text-7xl')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}

const captionText = classnames(
  textColor('text-white'),
  textAlign('text-center'),
  fontWeight('font-bold'),
  fontSize('text-xs', 'md:text-base')
)
export function CaptionText({ children }: ChildrenProp) {
  return <p className={captionText}>{children}</p>
}
