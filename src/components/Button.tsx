import { JSXInternal } from 'preact/src/jsx'
import classnames, {
  TFontSize,
  THeight,
  TTailwindString,
  TTextColor,
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
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
  smallPaddings?: boolean
  onClick?: () => void
  leftIcon?: JSXInternal.Element
  bold?: boolean
  fontSized?: TFontSize
  fixedHeight?: THeight
  fixedWidth?: TTailwindString
  color?: TTextColor
  outline?: boolean
}

const buttonClassnames = ({
  bold,
  color,
  fixedHeight,
  fixedWidth,
  fontSized,
  outline,
  smallPaddings,
}: ButtonProps) => {
  return classnames(
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    gap('gap-x-3'),
    backgroundColor(outline ? 'bg-transparent' : 'bg-blue-default'),
    borderColor('border-blue-light'),
    borderWidth({ border: outline }),
    textColor(color || 'text-white'),
    fontWeight({ 'font-bold': bold }),
    fontSize(fontSized),
    padding(
      {
        'px-4': smallPaddings,
        'px-6': !smallPaddings,
        'sm:px-14': !smallPaddings,
      },
      smallPaddings ? 'py-1' : 'py-4'
    ),
    height(fixedHeight || 'h-fit'),
    fixedWidth
      ? width(fixedWidth)
      : width(smallPaddings ? 'w-fit' : { 'sm:w-fit': true, 'w-full': true }),
    borderRadius('rounded-full'),
    opacity('hover:opacity-80', 'active:opacity-50'),
    transitionProperty('transition'),
    transitionDuration('duration-100'),
    scale('hover:scale-105'),
    userSelect('select-none'),
    outlineStyle('focus:outline-none')
  )
}
export default function ({
  bold,
  color,
  fixedHeight,
  fixedWidth,
  fontSized,
  leftIcon,
  onClick,
  outline,
  smallPaddings,
  title,
}: ButtonProps) {
  return (
    <button
      className={buttonClassnames({
        bold,
        color,
        fixedHeight,
        fixedWidth,
        fontSized,
        outline,
        smallPaddings,
      })}
      onClick={onClick}
    >
      {leftIcon}
      {title}
    </button>
  )
}
