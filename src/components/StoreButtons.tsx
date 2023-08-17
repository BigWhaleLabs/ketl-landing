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

const downloadButtonsWrapper = (small?: boolean) =>
  classnames(
    margin({ 'my-4': !small, 'xs:my-10': !small }),
    display('flex'),
    flexDirection({ 'flex-col': true, 'md:flex-row': !small }),
    gap({ 'gap-2': small, 'gap-4': !small }),
    alignItems('items-center'),
    justifyContent('justify-center')
  )

export default function StoreButtons({
  showAndroid,
  showIos,
  small,
}: {
  showIos: boolean
  showAndroid: boolean
  small?: boolean
}) {
  return (
    <div className={downloadButtonsWrapper(small)}>
      {showIos && (
        <StoreButton
          icon={GetOnTestflight()}
          small={small}
          onClick={() => openBlankTab(testFlightLink)}
        />
      )}
      {showAndroid && (
        <StoreButton
          icon={GetOnGooglePlay()}
          small={small}
          onClick={() =>
            openBlankTab(isAndroid ? androidPlayStore : webPlayStore)
          }
        />
      )}
    </div>
  )
}
