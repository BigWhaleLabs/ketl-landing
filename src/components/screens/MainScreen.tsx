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
import getHashComponent from 'helpers/getHashComponent'
import openBlankTab from 'helpers/openBlankTab'
import useUserAgent from 'hooks/useUserAgent'

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
  const platform = useUserAgent()

  useEffect(() => {
    const hashToken = getHashComponent().token
    if (hashToken) return setLocation(`/token/${hashToken}`)

    const urlSearchParams = new URLSearchParams(window.location.search)
    if (urlSearchParams.has('token'))
      window.location.replace('/#/?token=' + urlSearchParams.get('token'))
  }, [setLocation])

  return (
    <div className={container}>
      <div className={elementsWidth}>
        <AppMotto />
      </div>

      <StoreButtons
        showAndroid={platform !== 'ios'}
        showIos={platform !== 'android'}
      />

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
