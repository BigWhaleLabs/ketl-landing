import AppMotto from 'icons/AppMotto'
import Button from 'components/Button'
import WhatPeopleThink from 'icons/WhatPeopleThink'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  padding,
  scale,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'

const whatPeopleThinkWrapper = classnames(
  scale('scale-50', 'xs:scale-65', 'md:scale-100'),
  transitionProperty('transition-transform')
)
const mottoWrapper = classnames(width('w-64', 'xs:w-80', 'md:w-96'))
const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  zIndex('z-20'),
  padding('px-4')
)

const buttonContainer = classnames(margin('my-10'))

export default function () {
  return (
    <div className={container}>
      <div className={mottoWrapper}>
        <AppMotto />
      </div>

      <div className={buttonContainer}>
        <Button
          small
          title="Join the waitlist"
          onClick={() => window.open('https://bit.ly/ketl-invites', '_blank')}
        />
      </div>

      <div className={whatPeopleThinkWrapper}>
        <WhatPeopleThink />
      </div>
    </div>
  )
}
