import { CaptionText } from 'components/Text'
import { androidPlayStore, testFlightLink, webPlayStore } from 'helpers/data'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { isMobileDevice } from 'helpers/isMobileDevice'
import AnonFace from 'icons/AnonFace'
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
  padding,
  zIndex,
} from 'classnames/tailwind'
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

const downloadButtonsWrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-4'),
  alignItems('items-center'),
  justifyContent('justify-center')
)

function OpenKetlBlock({ token }: TokenScreenParams) {
  if (!token) return null

  const captionText = isMobileDevice
    ? 'If Ketl doesn’t open automatically, click on the button below to install the app and open this page again'
    : 'Ketl is available only on mobile devices. Get it by button below and open this page again'

  return (
    <div className={caption}>
      <CaptionText>
        This is your link with the profile activation code!
      </CaptionText>
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
