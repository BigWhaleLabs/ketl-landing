import { BasicText } from 'components/Text'
import {
  androidPlayStore,
  testFlightLink,
  verificationFrom,
  webPlayStore,
} from 'helpers/data'
import { isAndroid } from 'helpers/isMobileDevice'
import AppMotto from 'icons/AppMotto'
import Button from 'components/Button'
import GetOnGooglePlay from 'icons/GetOnGooglePlay'
import GetOnTestflight from 'icons/GetOnTestflight'
import StoreButton from 'components/StoreButton'
import WhatPeopleThink from 'icons/WhatPeopleThink'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
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

const downloadButtonsWrapper = classnames(
  margin('my-4', 'xs:my-10'),
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  gap('gap-4'),
  alignItems('items-center'),
  justifyContent('justify-center')
)

const bottomBlockWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  gap('gap-y-2'),
  margin('mt-6')
)

export default function () {
  return (
    <div className={container}>
      <div className={elementsWidth}>
        <AppMotto />
      </div>

      <div className={downloadButtonsWrapper}>
        <StoreButton
          icon={GetOnTestflight()}
          onClick={() => openBlankTab(testFlightLink)}
        />
        <StoreButton
          icon={GetOnGooglePlay()}
          onClick={() =>
            openBlankTab(isAndroid ? androidPlayStore : webPlayStore)
          }
        />
      </div>

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
