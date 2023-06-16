import classnames, {
  backgroundColor,
  borderRadius,
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

const buttonClassnames = (small: boolean) =>
  classnames(
    backgroundColor('bg-blue-default'),
    textColor('text-white'),
    padding('px-14', small ? 'py-2' : 'py-4'),
    width(small ? 'w-fit' : { 'sm:w-fit': true, 'w-full': true }),
    borderRadius('rounded-full'),
    opacity('hover:opacity-80', 'active:opacity-50'),
    transitionProperty('transition'),
    transitionDuration('duration-100'),
    scale(small ? 'hover:scale-125' : 'hover:scale-105'),
    userSelect('select-none'),
    outlineStyle('focus:outline-none')
  )
export default function ({
  onClick,
  small = true,
  title,
}: {
  small?: boolean
  title: string
  onClick?: () => void
}) {
  return (
    <button
      className={buttonClassnames(small)}
      onClick={() => {
        if (onClick) return onClick()
        else window.open('https://bit.ly/ketl-invites', '_blank')
      }}
    >
      {title}
    </button>
  )
}
