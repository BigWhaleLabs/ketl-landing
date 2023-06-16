import { BodyText } from 'components/Text'
import Button from 'components/Button'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
  margin,
  zIndex,
} from 'classnames/tailwind'

const logo = classnames(margin('my-20'))
const container = classnames(
  display('flex'),
  flex('flex-1'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  zIndex('z-20')
)
const text = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-end'),
  gap('gap-4')
)
const buttonContainer = classnames(margin('my-10'))

export default function () {
  return (
    <div className={container}>
      <img alt="ketl" className={logo} src="/media/logo.svg" />
      <div className={text}>
        <BodyText>verified,</BodyText>
        <BodyText>anonymous</BodyText>
        <BodyText>discussions</BodyText>
      </div>
      <div className={buttonContainer}>
        <Button small title="Join the waitlist" />
      </div>
    </div>
  )
}
