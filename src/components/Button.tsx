import classnames, {
  backgroundColor,
  borderRadius,
  opacity,
  padding,
  scale,
  textColor,
  transitionDuration,
  transitionProperty,
} from 'classnames/tailwind'

const buttonClassnames = classnames(
  backgroundColor('bg-blue-default'),
  textColor('text-white'),
  padding('px-14', 'py-2'),
  borderRadius('rounded-full'),
  opacity('hover:opacity-80', 'active:opacity-50'),
  transitionProperty('transition'),
  transitionDuration('duration-100'),
  scale('hover:scale-125')
)
export default function ({
  onClick,
  title,
}: {
  title: string
  onClick?: () => void
}) {
  return (
    <button
      className={buttonClassnames}
      onClick={() => {
        if (onClick) return onClick()
        else window.open('https://bit.ly/ketl-invites', '_blank')
      }}
    >
      {title}
    </button>
  )
}
