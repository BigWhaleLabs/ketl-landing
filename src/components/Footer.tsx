import { basicTextStyles } from 'components/Text'
import { ketlDiscordLink, ketlTwitterLink } from 'helpers/data'
import Discord from 'icons/Discord'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  margin,
  userSelect,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center', 'md:justify-end'),
  alignItems('items-center'),
  gap('gap-3'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-12'),
  userSelect('select-none'),
  basicTextStyles({})
)

export default function () {
  return (
    <div className={wrapper}>
      <a href={ketlTwitterLink} target="_blank">
        <Discord />
      </a>
      ·
      <a href={ketlDiscordLink} target="_blank">
        <Twitter />
      </a>
    </div>
  )
}
