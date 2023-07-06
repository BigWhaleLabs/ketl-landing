import { BasicText } from 'components/Text'
import { Link } from 'wouter-preact'
import { ketlTwitterLink } from 'helpers/data'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  padding,
  textColor,
  transitionProperty,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-center', 'md:justify-end'),
  alignItems('items-center'),
  gap('gap-x-3'),
  padding('py-12', 'px-18'),
  height('h-12')
)
const link = classnames(
  textColor('hover:text-alternative'),
  transitionProperty('transition-colors')
)

export default function () {
  return (
    <BasicText>
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
    </BasicText>
  )
}
