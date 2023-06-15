import { HeaderText } from 'components/Text'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { useEffect } from 'preact/hooks'
import Button from 'components/Button'
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
      <HeaderText>Join to get started</HeaderText>
      <Button title="Download through Testflight" onClick={openKetlAppStore} />
      <Button title="Join us on discord" onClick={openKetlPlayStore} />
    </div>
  )
}
