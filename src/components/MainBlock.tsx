import { BodyText } from 'components/Text'
import Button from 'components/Button'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  margin,
} from 'classnames/tailwind'

const logo = classnames(margin('my-20'))
const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center')
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
      <img className={logo} src="/media/logo.svg" alt="ketl" />
      <div className={text}>
        <BodyText>verified,</BodyText>
        <BodyText>anonymous</BodyText>
        <BodyText>discussions</BodyText>
      </div>
      <div className={buttonContainer}>
        <Button title="Join the waitlist" />
      </div>
    </div>
  )
}
