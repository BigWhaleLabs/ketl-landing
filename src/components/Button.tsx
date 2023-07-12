import { JSXInternal } from 'preact/src/jsx'
import classnames, {
  TFontSize,
  THeight,
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  opacity,
  outlineStyle,
  padding,
  scale,
  textColor,
  transitionDuration,
  transitionProperty,
  userSelect,
  width,
} from 'classnames/tailwind'

interface ButtonProps {
  title?: string
  small?: boolean
  onClick?: () => void
  leftIcon?: JSXInternal.Element
  fullWidth?: boolean
  bold?: boolean
  fontSized?: TFontSize
  fixedHeight?: THeight
}

const buttonClassnames = ({
  bold,
  fixedHeight,
  fontSized,
  fullWidth,
  small,
}: ButtonProps) =>
  classnames(
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    gap('gap-x-3'),
    backgroundColor('bg-blue-default'),
    textColor('text-white'),
    fontWeight({ 'font-bold': bold }),
    fontSize(fontSized),
    padding('px-6', 'sm:px-14', small ? 'py-3' : 'py-4'),
    height(fixedHeight || 'h-fit'),
    fullWidth
      ? width('w-full')
      : width(small ? 'w-fit' : { 'sm:w-fit': true, 'w-full': true }),
    borderRadius('rounded-full'),
    opacity('hover:opacity-80', 'active:opacity-50'),
    transitionProperty('transition'),
    transitionDuration('duration-100'),
    scale('hover:scale-105'),
    userSelect('select-none'),
    outlineStyle('focus:outline-none')
  )
export default function ({
  bold,
  fixedHeight,
  fontSized,
  fullWidth,
  leftIcon,
  onClick,
  small,
  title,
}: ButtonProps) {
  return (
    <button
      className={buttonClassnames({
        bold,
        fixedHeight,
        fontSized,
        fullWidth,
        small,
      })}
      onClick={onClick}
    >
      {leftIcon}
      {title}
    </button>
  )
}
