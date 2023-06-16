import { CaptionText } from 'components/Text'
import { isMobileDevice } from 'helpers/isMobileDevice'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import EmailScreenParams from 'models/EmailScreenParams'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
  padding,
  zIndex,
} from 'classnames/tailwind'
import openAppEmailLink from 'helpers/openAppEmailLink'

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

function OpenKetlBlock({ domain, token }: EmailScreenParams) {
  if (!domain || !token) return null

  return (
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
  )
}

export default function EmailScreen({ domain, token }: EmailScreenParams) {
  if (domain && token && isMobileDevice) openAppEmailLink({ domain, token })

  return (
    <div className={wrapper}>
      <AnonFace />
      {isMobileDevice && <OpenKetlBlock domain={domain} token={token} />}
    </div>
  )
}
