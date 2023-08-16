import { BasicText } from 'components/Text'
import { useEffect } from 'preact/hooks'
import { useLocation } from 'wouter-preact'
import { verificationFrom } from 'helpers/data'
import AppMotto from 'icons/AppMotto'
import Button from 'components/Button'
import StoreButtons from 'components/StoreButtons'
import WhatPeopleThink from 'icons/WhatPeopleThink'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  margin,
  padding,
  scale,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'
import openBlankTab from 'helpers/openBlankTab'

const whatPeopleThinkWrapper = classnames(
  scale('scale-50', 'xs:scale-65', 'md:scale-100'),
  transitionProperty('transition-transform')
)
const elementsWidth = width('w-64', 'xs:w-80', 'md:w-104')
const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  zIndex('z-20'),
  padding('px-4')
)

const bottomBlockWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  gap('gap-y-2'),
  margin('mt-6')
)

export default function () {
  const [, setLocation] = useLocation()

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)

    if (urlSearchParams.has('token'))
      setLocation(`/token/${urlSearchParams.get('token')}`)
  }, [setLocation])

  return (
    <div className={container}>
      <div className={elementsWidth}>
        <AppMotto />
      </div>

      <StoreButtons showAndroid showIos />

      <div className={whatPeopleThinkWrapper}>
        <WhatPeopleThink />
      </div>

      <div className={bottomBlockWrapper}>
        <BasicText color="text-blue-light">
          Not part of the YC community?
        </BasicText>
        <Button
          outline
          smallPaddings
          color="text-blue-light"
          title="Request an invite"
          onClick={() => openBlankTab(verificationFrom)}
        />
      </div>
    </div>
  )
}
