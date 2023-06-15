import { BodyText, CaptionText } from 'components/Text'
import { isMobileDevice } from 'helpers/isMobileDevice'
import Button from 'components/Button'
import EmailScreenParams from 'models/EmailScreenParams'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
} from 'classnames/tailwind'
import openAppEmailLink from 'helpers/openAppEmailLink'

const wrapper = classnames(
  display('flex'),
  flex('flex-1'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-4')
)
const caption = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-2')
)

export default function EmailScreen({ domain, token }: EmailScreenParams) {
  if (domain && token && isMobileDevice) openAppEmailLink({ domain, token })

  return (
    <div className={wrapper}>
      <BodyText>💌</BodyText>
      {domain && token && isMobileDevice && (
        <div className={caption}>
          <CaptionText>
            Click the button below to open Ketl if it didn't happened
            automatically
          </CaptionText>
          <Button
            title="Open Ketl"
            onClick={() => openAppEmailLink({ blank: true, domain, token })}
          />
        </div>
      )}
    </div>
  )
}
