import { Link } from 'wouter-preact'
import { basicTextStyles } from 'components/Text'
import { ketlTwitterLink } from 'helpers/data'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  margin,
  textColor,
  transitionProperty,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'xs:flex-row'),
  justifyContent('justify-center', 'md:justify-end'),
  alignItems('items-center'),
  gap('gap-x-3'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-12'),
  basicTextStyles({})
)
const link = classnames(
  textColor('hover:text-alternative'),
  transitionProperty('transition-colors')
)

export default function () {
  return (
    <div className={wrapper}>
      <a className={link} href={ketlTwitterLink} target="_blank">
        <Twitter />
      </a>
      ·
      <Link className={link} href="/privacy">
        Privacy policy
      </Link>
      ·
      <Link className={link} href="/terms">
        Terms of service
      </Link>
    </div>
  )
}
