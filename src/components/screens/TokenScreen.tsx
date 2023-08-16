import { CaptionText, InstractionText, TokenText } from 'components/Text'
import { androidPlayStore, testFlightLink, webPlayStore } from 'helpers/data'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { isMobileDevice } from 'helpers/isMobileDevice'
import { useLocation } from 'wouter-preact'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import GetOnGooglePlay from 'icons/GetOnGooglePlay'
import GetOnTestflight from 'icons/GetOnTestflight'
import StoreButton from 'components/StoreButton'
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
import openAppTokenLink from 'helpers/openAppTokenLink'
import openBlankTab from 'helpers/openBlankTab'

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
  margin('my-20'),
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

const downloadButtonsWrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-4'),
  alignItems('items-center'),
  justifyContent('justify-center')
)

function OpenKetlBlock({ token }: TokenScreenParams) {
  const [, navigate] = useLocation()
  if (!token) {
    navigate('/')
    return null
  }

  function onCopy() {
    if (token) copy(token)
  }

  const captionText = isMobileDevice
    ? 'If Ketl doesn’t open automatically, click on the button below to install the app and open this page again'
    : 'Ketl is available only on mobile devices. Get it by button below and open this page on mobile device again'

  return (
    <div className={caption}>
      <CaptionText>{captionText}</CaptionText>

      <div className={downloadButtonsWrapper}>
        {(isIos || !isMobileDevice) && (
          <StoreButton
            icon={GetOnTestflight()}
            onClick={() => openBlankTab(testFlightLink)}
          />
        )}
        {(isAndroid || !isMobileDevice) && (
          <StoreButton
            icon={GetOnGooglePlay()}
            onClick={() =>
              openBlankTab(isAndroid ? androidPlayStore : webPlayStore)
            }
          />
        )}
      </div>

      <div className={instraction}>
        <CaptionText>
          You can also enter the code manually by following instruction:
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
          <TokenText onClick={onCopy}>{token}</TokenText>
        </div>
      </div>
    </div>
  )
}

export default function TokenScreen({ token }: TokenScreenParams) {
  if (token && isMobileDevice) openAppTokenLink({ token })

  return (
    <div className={wrapper}>
      <AnonFace />
      <OpenKetlBlock token={token} />
    </div>
  )
}
