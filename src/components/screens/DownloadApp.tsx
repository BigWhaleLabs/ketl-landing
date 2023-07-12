import { BasicText, HeaderText } from 'components/Text'
import { androidPlayStore, testFlightLink, webPlayStore } from 'helpers/data'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { useEffect } from 'preact/hooks'
import BeforeWeHitAppStore from 'icons/BeforeWeHitAppStore'
import Button from 'components/Button'
import GetOnGooglePlay from 'icons/GetOnGooglePlay'
import TestFlightIcon from 'icons/TestFlight'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  margin,
  padding,
  position,
  scale,
  transitionProperty,
  width,
} from 'classnames/tailwind'
import openBlankTab from 'helpers/openBlankTab'

const wrapper = classnames(
  position('relative'),
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  gap('gap-4'),
  margin('mt-4')
)
const screenWrapper = classnames(wrapper, width('w-full'), padding('px-4'))
const floatingTextWrapper = classnames(
  scale('scale-50', 'xs:scale-65', 'md:scale-100'),
  transitionProperty('transition-transform'),
  margin('mt-6')
)

export default function () {
  useEffect(() => {
    if (isAndroid) openBlankTab(androidPlayStore)
    if (isIos) openBlankTab(testFlightLink)
  }, [])

  return (
    <div className={screenWrapper}>
      <HeaderText color="text-blue-light">How to get started</HeaderText>
      <div className={wrapper}>
        <Button
          bold
          fixedHeight="h-15"
          fontSized="text-lg"
          leftIcon={TestFlightIcon()}
          title="Download through TestFlight"
          onClick={() => openBlankTab(testFlightLink)}
        />
        <BasicText bold small>
          Or
        </BasicText>
        <Button
          bold
          fullWidth
          small
          fixedHeight="h-15"
          fontSized="text-lg"
          leftIcon={GetOnGooglePlay()}
          onClick={() =>
            openBlankTab(isAndroid ? androidPlayStore : webPlayStore)
          }
        />
      </div>
      <div className={floatingTextWrapper}>
        <BeforeWeHitAppStore />
      </div>
    </div>
  )
}
