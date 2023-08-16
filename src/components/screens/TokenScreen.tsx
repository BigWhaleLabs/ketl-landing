import { CaptionText, InstractionText, TokenText } from 'components/Text'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { isMobileDevice } from 'helpers/isMobileDevice'
import { useState } from 'preact/hooks'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import KetlPath from 'models/KetlPath'
import StoreButtons from 'components/StoreButtons'
import TokenScreenParams from 'models/TokenScreenParams'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
  margin,
  padding,
  zIndex,
} from 'classnames/tailwind'
import copy from 'copy-to-clipboard'
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
const caption = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-8')
)

const instraction = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-2')
)

const secretToken = classnames(
  margin('my-10'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-2')
)

function OpenKetlBlock({ token }: TokenScreenParams) {
  const [show, setReveal] = useState(false)
  function onCopy() {
    if (token) copy(token)
  }

  function onReveal() {
    setReveal(true)
  }

  const captionText = isMobileDevice
    ? 'If Ketl doesn’t open automatically, click on the button below to install the app and open this page again to register the account'
    : 'Ketl is available only on mobile devices. Get it by button below and open this page on the mobile device again'

  return (
    <div className={caption}>
      <CaptionText>{captionText}</CaptionText>

      <StoreButtons
        showAndroid={isAndroid || !isMobileDevice}
        showIos={isIos || !isMobileDevice}
      />

      <div className={instraction}>
        <CaptionText>
          OR you can enter the code manually by following instruction:
        </CaptionText>
        <InstractionText>1) Open the Ketl app</InstractionText>
        <InstractionText>
          2) Click on the "Verify anonymously" or "Sign Up" button
        </InstractionText>
        <InstractionText>3) Select "I have an access token"</InstractionText>
        <InstractionText>
          4) Copy and paste your secret token into the input field
        </InstractionText>
        <div className={secretToken}>
          <Button title="Copy to clipboard" onClick={onCopy} />
          <TokenText onClick={onReveal}>
            {show ? token : <i>Click to reveal your token</i>}
          </TokenText>
        </div>
      </div>
    </div>
  )
}

export default function TokenScreen({ token }: TokenScreenParams) {
  if (isMobileDevice) openAppLink({ params: { token }, path: KetlPath.token })

  return (
    <div className={wrapper}>
      <AnonFace />
      <OpenKetlBlock token={token} />
    </div>
  )
}
