import { BasicText, HeaderText } from 'components/Text'
import { discordLink, testFlightLink } from 'helpers/data'
import { isAndroid, isIos } from 'helpers/isMobileDevice'
import { useEffect } from 'preact/hooks'
import BeforeWeHitAppStore from 'icons/BeforeWeHitAppStore'
import Button from 'components/Button'
import DiscordIcon from 'icons/Discord'
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
    if (isAndroid) openBlankTab(discordLink)
    if (isIos) openBlankTab(testFlightLink)
  }, [])

  return (
    <div className={screenWrapper}>
      <HeaderText color="text-blue-light">How to get started</HeaderText>
      <div className={wrapper}>
        <BasicText bold small>
          For iOS users:
        </BasicText>
        <Button
          bold
          fontSized="text-lg"
          leftIcon={TestFlightIcon()}
          title="Download through TestFlight"
          onClick={() => openBlankTab(testFlightLink)}
        />
        <BasicText bold small>
          For Android users:
        </BasicText>
        <Button
          bold
          fullWidth
          fontSized="text-lg"
          leftIcon={DiscordIcon()}
          title="Get access on discord"
          onClick={() => openBlankTab(discordLink)}
        />
      </div>
      <div className={floatingTextWrapper}>
        <BeforeWeHitAppStore />
      </div>
    </div>
  )
}
