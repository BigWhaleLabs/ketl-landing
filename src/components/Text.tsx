import {
  TTextColor,
  classnames,
  cursor,
  fontSize,
  fontWeight,
  padding,
  textAlign,
  textColor,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const headerText = (color?: TTextColor) =>
  classnames(
    fontSize('text-3xl', 'sm:text-6xl'),
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
  textColor('text-blue-light'),
  textAlign('text-right'),
  fontWeight('font-bold'),
  fontSize('text-4xl', 'fold:text-5xl', 'md:text-7xl')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}

interface BasicTextProps {
  bold?: boolean
  small?: boolean
  color?: TTextColor
}
export const basicTextStyles = ({
  bold,
  color = 'text-formal',
  small,
}: BasicTextProps) =>
  classnames(
    textColor(color),
    fontSize({ 'text-xs': small }),
    fontWeight({ 'font-bold': bold })
  )
export function BasicText({
  bold,
  children,
  color,
  small,
}: ChildrenProp & BasicTextProps) {
  return <p className={basicTextStyles({ bold, color, small })}>{children}</p>
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

const instractionText = classnames(
  textColor('text-blue-light'),
  textAlign('text-center'),
  fontSize('text-xl')
)
export function InstractionText({ children }: ChildrenProp) {
  return <p className={instractionText}>{children}</p>
}

const codeText = classnames(
  textColor('text-blue-light'),
  textAlign('text-center'),
  wordBreak('break-all'),
  fontSize('text-xl'),
  padding('p-2'),
  cursor('cursor-pointer')
)
export function TokenText({
  children,
  onClick,
}: ChildrenProp & { onClick: () => void }) {
  return (
    <code className={codeText} onClick={onClick}>
      {children}
    </code>
  )
}
