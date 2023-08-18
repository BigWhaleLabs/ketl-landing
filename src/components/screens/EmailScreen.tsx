import { CaptionText } from 'components/Text'
import { isMobileDevice } from 'helpers/isMobileDevice'
import { useLocation } from 'wouter-preact'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import EmailScreenParams from 'models/EmailScreenParams'
import KetlPath from 'models/KetlPath'
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
import columnCentered from 'helpers/columnCenteredStyle'
import openAppLink from 'helpers/openAppLink'

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
const caption = classnames(...[columnCentered], gap('gap-y-8'))

function OpenKetlBlock({ domain, token }: EmailScreenParams) {
  const [, navigate] = useLocation()
  if (!domain || !token) return null
  const buttonText = `${isMobileDevice ? 'Open' : 'Get'} ketl`
  const captionText = isMobileDevice
    ? 'If Ketl doesn’t open automatically, click the button below.'
    : 'Ketl is available only on mobile devices. Get it by button below.'

  return (
    <div className={caption}>
      <CaptionText>{captionText}</CaptionText>
      <Button
        title={buttonText}
        onClick={() =>
          isMobileDevice
            ? openAppLink({
                blank: true,
                params: { domain, token },
                path: KetlPath.email,
              })
            : navigate('/')
        }
      />
    </div>
  )
}

export default function EmailScreen({ domain, token }: EmailScreenParams) {
  if (domain && token && isMobileDevice)
    openAppLink({ params: { domain, token }, path: KetlPath.email })

  return (
    <div className={wrapper}>
      <AnonFace />
      <OpenKetlBlock domain={domain} token={token} />
    </div>
  )
}
