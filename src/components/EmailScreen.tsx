import { CaptionText } from 'components/Text'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import EmailScreenParams from 'models/EmailScreenParams'
import classnames, {
  alignItems,
  blur,
  display,
  flex,
  flexDirection,
  gap,
  inset,
  justifyContent,
  maxHeight,
  minHeight,
  minWidth,
  objectFit,
  overflow,
  padding,
  position,
  zIndex,
} from 'classnames/tailwind'
import isMobileDevice from 'helpers/isMobileDevice'
import openAppEmailLink from 'helpers/openAppEmailLink'

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
const wrapper = classnames(
  display('flex'),
  flex('flex-1'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-6'),
  padding('px-4'),
  zIndex('z-20')
)
const caption = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-8')
)

export default function EmailScreen({ domain, token }: EmailScreenParams) {
  if (domain && token && isMobileDevice) openAppEmailLink({ domain, token })

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

      <div className={wrapper}>
        <AnonFace />
        {domain && token && isMobileDevice && (
          <div className={caption}>
            <CaptionText>
              If ketl doesn’t open automatically, click the button below.
            </CaptionText>
            <Button
              small={false}
              title="Open Ketl"
              onClick={() => openAppEmailLink({ blank: true, domain, token })}
            />
          </div>
        )}
      </div>
    </>
  )
}
