import { JSXInternal } from 'preact/src/jsx'
import classnames, {
  TFontSize,
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  fontSize,
  fontWeight,
  gap,
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
}

const buttonClassnames = ({ bold, fontSized, fullWidth, small }: ButtonProps) =>
  classnames(
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-center'),
    gap('gap-x-3'),
    backgroundColor('bg-blue-default'),
    textColor('text-white'),
    fontWeight({ 'font-bold': bold }),
    fontSize(fontSized),
    padding('px-6', 'sm:px-14', small ? 'py-2' : 'py-4'),
    fullWidth
      ? width('w-full')
      : width(small ? 'w-fit' : { 'sm:w-fit': true, 'w-full': true }),
    borderRadius('rounded-full'),
    opacity('hover:opacity-80', 'active:opacity-50'),
    transitionProperty('transition'),
    transitionDuration('duration-100'),
    scale(small ? 'hover:scale-125' : 'hover:scale-105'),
    userSelect('select-none'),
    outlineStyle('focus:outline-none')
  )
export default function ({
  bold,
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
        fontSized,
        fullWidth,
        small,
      })}
      onClick={() => {
        if (onClick) return onClick()
        else window.open('https://bit.ly/ketl-invites', '_blank')
      }}
    >
      {leftIcon}
      {title}
    </button>
  )
}
