import { ketlDiscordLink, ketlTwitterLink } from 'helpers/data'
import { useLocation } from 'wouter-preact'
import AnimatedLogo from 'components/AnimatedLogo'
import Discord from 'icons/Discord'
import Twitter from 'icons/Twitter'
import WhatPeopleThink from 'icons/WhatPeopleThink'
import classnames, {
  alignItems,
  cursor,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  margin,
  padding,
  scale,
  textColor,
  transitionProperty,
  userSelect,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-16'),
  transitionProperty('transition-all')
)

const leftBlock = classnames(
  width('w-44'),
  height('h-16'),
  cursor('cursor-pointer'),
  scale('scale-75', 'xs:scale-100')
)
const rightBlock = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  justifyContent('justify-end', 'md:justify-center'),
  padding('pr-6', 'md:pr-0'),
  gap('gap-x-4'),
  width('w-44'),
  height('h-16'),
  userSelect('select-none')
)
const centerBlock = classnames(width('w-96'), display('lg:flex', 'hidden'))
const linkHover = textColor('hover:text-formal', 'text-blue-light')

export default function () {
  const [, setLocation] = useLocation()

  return (
    <div className={wrapper}>
      <a
        className={leftBlock}
        onClick={() => setLocation('/')}
        onTouchStart={() => setLocation('/')}
      >
        <AnimatedLogo />
      </a>
      <div className={centerBlock}>
        <WhatPeopleThink />
      </div>
      <div className={rightBlock}>
        <a className={linkHover} href={ketlDiscordLink} target="_blank">
          <Discord />
        </a>
        <a className={linkHover} href={ketlTwitterLink} target="_blank">
          <Twitter />
        </a>
      </div>
    </div>
  )
}
