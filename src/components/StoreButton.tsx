import { JSXInternal } from 'preact/src/jsx'
import { width } from 'classnames/tailwind'
import Button from 'components/Button'

const buttonWidth = (small?: boolean) =>
  width({
    'md:w-50': !small,
    'md:w-80': small,
    'w-56': small,
    'w-64': !small,
    'xs:w-72': small,
    'xs:w-80': !small,
  })

export default function ({
  icon,
  onClick,
  small,
}: {
  small?: boolean
  icon: JSXInternal.Element
  onClick: () => void
}) {
  return (
    <Button
      bold
      smallPaddings
      fixedHeight="h-15"
      fixedWidth={buttonWidth(small)}
      fontSized="text-lg"
      leftIcon={icon}
      onClick={onClick}
    />
  )
}
