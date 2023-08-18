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

const captionText = (color: TTextColor) =>
  classnames(
    textColor(color),
    textAlign('text-center'),
    fontWeight('font-bold'),
    fontSize('text-xl')
  )
export function CaptionText({
  children,
  color = 'text-blue-light',
}: { color?: TTextColor } & ChildrenProp) {
  return <p className={captionText(color)}>{children}</p>
}

interface InstructionTextProps {
  primary?: boolean
  small?: boolean
  weight?: 'bold' | 'medium'
}

const instructionText = ({ primary, small, weight }: InstructionTextProps) =>
  classnames(
    textColor(primary ? 'text-blue-light' : 'text-secondary'),
    fontWeight({
      'font-bold': weight === 'bold',
      'font-medium': weight === 'medium',
    }),
    fontSize({ 'text-sm': small }),
    textAlign('text-center')
  )
export function InstructionText({
  children,
  primary,
  small,
  weight,
}: InstructionTextProps & ChildrenProp) {
  return (
    <p className={instructionText({ primary, small, weight })}>{children}</p>
  )
}
