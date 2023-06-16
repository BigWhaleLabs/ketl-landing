import { HeaderText } from 'components/Text'
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
  inset,
  justifyContent,
  margin,
  position,
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
  margin('mt-16')
)
const screenWrapper = classnames(wrapper, width('w-full'))
const floatingText = classnames(
  position('absolute'),
  inset('left-1/2'),
  display('hidden', 'xl:block')
)

export default function () {
  useEffect(() => {
    if (isAndroid) openBlankTab(discordLink)
    if (isIos) openBlankTab(testFlightLink)
  }, [])

  return (
    <div className={screenWrapper}>
      <HeaderText color="text-blue-default">How to get</HeaderText>
      <HeaderText color="text-blue-default">started</HeaderText>
      <div className={floatingText}>
        <BeforeWeHitAppStore />
      </div>
      <div className={wrapper}>
        <Button
          bold
          fontSized="text-lg"
          leftIcon={TestFlightIcon()}
          title="Download through TestFlight"
          onClick={() => openBlankTab(testFlightLink)}
        />
        <Button
          bold
          fullWidth
          fontSized="text-lg"
          leftIcon={DiscordIcon()}
          title="Join us on discord"
          onClick={() => openBlankTab(discordLink)}
        />
      </div>
    </div>
  )
}
