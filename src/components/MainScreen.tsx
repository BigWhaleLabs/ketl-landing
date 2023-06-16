import { BodyText } from 'components/Text'
import Button from 'components/Button'
import classnames, {
  alignItems,
  blur,
  display,
  flex,
  flexDirection,
  gap,
  inset,
  justifyContent,
  margin,
  maxHeight,
  minHeight,
  minWidth,
  objectFit,
  overflow,
  position,
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
const videoContainer = classnames(
  position('absolute'),
  inset('inset-0'),
  blur('blur-xl'),
  minWidth('min-w-full'),
  minHeight('min-h-full'),
  maxHeight('max-h-full'),
  overflow('overflow-hidden'),
  objectFit('object-cover'),
  zIndex('-z-1')
)

export default function () {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className={videoContainer}
        src="/media/cover.mp4"
        type="video/mp4"
      />

      <div className={container}>
        <img alt="ketl" className={logo} src="/media/logo.svg" />
        <div className={text}>
          <BodyText>verified,</BodyText>
          <BodyText>anonymous</BodyText>
          <BodyText>discussions</BodyText>
        </div>
        <div className={buttonContainer}>
          <Button title="Join the waitlist" />
        </div>
      </div>
    </>
  )
}
