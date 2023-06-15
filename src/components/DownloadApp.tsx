import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { useEffect } from 'preact/hooks'
import GetItOnAppStore from 'components/icons/GetItOnAppStore'
import GetItOnPlayStore from 'components/icons/GetItOnPlayStore'
import classnames, {
  alignItems,
  cursor,
  display,
  flexDirection,
  gap,
  justifyContent,
  textColor,
  transitionDuration,
  transitionProperty,
  width,
} from 'classnames/tailwind'
import openKetlAppStore from 'helpers/openKetlAppStore'
import openKetlPlayStore from 'helpers/openKetlPlayStore'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  width('w-full'),
  gap('gap-4'),
  textColor('text-white')
)

const storeIcon = classnames(
  width('w-full', 'sm:w-1/3'),
  cursor('cursor-pointer'),
  textColor('hover:text-gray-200'),
  transitionProperty('transition-colors'),
  transitionDuration('duration-300')
)

export default function () {
  useEffect(() => {
    if (isAndroid) openKetlPlayStore()
    if (isIos) openKetlAppStore()
  }, [])

  return (
    <div className={wrapper}>
      <div className={storeIcon} onClick={openKetlPlayStore}>
        <GetItOnPlayStore />
      </div>
      <div className={storeIcon} onClick={openKetlAppStore}>
        <GetItOnAppStore />
      </div>
    </div>
  )
}
