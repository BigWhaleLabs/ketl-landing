import { JSXInternal } from 'preact/src/jsx'
import { width } from 'classnames/tailwind'
import Button from 'components/Button'

const buttonWidth = width('w-64', 'xs:w-80', 'md:w-50')

export default function ({
  icon,
  onClick,
}: {
  icon: JSXInternal.Element
  onClick: () => void
}) {
  return (
    <Button
      bold
      smallPaddings
      fixedHeight="h-15"
      fixedWidth={buttonWidth}
      fontSized="text-lg"
      leftIcon={icon}
      onClick={onClick}
    />
  )
}
