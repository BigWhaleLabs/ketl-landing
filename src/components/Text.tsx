import {
  TTextColor,
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const headerText = (color?: TTextColor) =>
  classnames(
    fontSize('text-3xl', 'fold:text-5xl', 'sm:text-6xl'),
    fontWeight('font-bold'),
    textAlign('text-center'),
    textColor(color)
  )
export function HeaderText({
  children,
  color,
}: ChildrenProp & { color?: TTextColor }) {
  return <p className={headerText(color)}>{children}</p>
}

const bodyText = classnames(
  textColor('text-blue-default'),
  textAlign('text-right'),
  fontWeight('font-bold'),
  fontSize('text-4xl', 'fold:text-5xl', 'md:text-7xl')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}

const captionText = classnames(
  textColor('text-blue-light'),
  textAlign('text-center'),
  fontWeight('font-bold'),
  fontSize('text-xl')
)
export function CaptionText({ children }: ChildrenProp) {
  return <p className={captionText}>{children}</p>
}
