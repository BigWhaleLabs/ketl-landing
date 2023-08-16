import { androidPlayStore, testFlightLink, webPlayStore } from 'helpers/data'
import { isAndroid } from 'helpers/isMobileDevice'
import GetOnGooglePlay from 'icons/GetOnGooglePlay'
import GetOnTestflight from 'icons/GetOnTestflight'
import StoreButton from 'components/StoreButton'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  margin,
} from 'classnames/tailwind'
import openBlankTab from 'helpers/openBlankTab'

const downloadButtonsWrapper = classnames(
  margin('my-4', 'xs:my-10'),
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-4'),
  alignItems('items-center'),
  justifyContent('justify-center')
)

export default function StoreButtons({
  showAndroid,
  showIos,
}: {
  showIos: boolean
  showAndroid: boolean
}) {
  return (
    <div className={downloadButtonsWrapper}>
      {showIos && (
        <StoreButton
          icon={GetOnTestflight()}
          onClick={() => openBlankTab(testFlightLink)}
        />
      )}
      {showAndroid && (
        <StoreButton
          icon={GetOnGooglePlay()}
          onClick={() =>
            openBlankTab(isAndroid ? androidPlayStore : webPlayStore)
          }
        />
      )}
    </div>
  )
}
