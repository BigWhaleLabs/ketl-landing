import { useEffect } from 'react'
import { useLocation } from 'wouter-preact'
import AppMotto from 'icons/AppMotto'
import GradientSeparator from 'components/GradientSeparator'
import MainCarousel from 'components/MainCarousel'
import StoreButtons from 'components/StoreButtons'
import WhatPeopleThink from 'icons/WhatPeopleThink'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  padding,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'
import getHashComponent from 'helpers/getHashComponent'
import useUserAgent from 'hooks/useUserAgent'

const whatPeopleThinkWrapper = classnames(
  width('w-56', 'xs:w-72', 'md:w-96'),
  transitionProperty('transition-transform'),
  display('lg:hidden')
)
const elementsWidth = width('w-64', 'xs:w-80', 'md:w-104')
const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  zIndex('z-20'),
  padding('px-4'),
  gap('gap-y-8')
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
      <div className={whatPeopleThinkWrapper}>
        <WhatPeopleThink />
      </div>

      <div className={elementsWidth}>
        <AppMotto />
      </div>

      <StoreButtons
        showAndroid={platform !== 'ios'}
        showIos={platform !== 'android'}
      />

      <GradientSeparator className={elementsWidth} />
      <MainCarousel />
    </div>
  )
}
