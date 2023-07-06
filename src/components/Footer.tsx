import { basicTextStyles } from 'components/Text'
import { ketlTwitterLink, sealCredLink } from 'helpers/data'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  margin,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'xs:flex-row'),
  justifyContent('justify-center', 'md:justify-end'),
  alignItems('items-center'),
  gap('gap-3'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-12'),
  basicTextStyles({})
)
const displayOnXs = display('hidden', 'xs:block')

export default function () {
  return (
    <div className={wrapper}>
      <a href={ketlTwitterLink} target="_blank">
        <Twitter />
      </a>
      <div className={displayOnXs}>·</div>
      <a href={`${sealCredLink}/privacy`} target="_blank">
        Privacy policy
      </a>
      <div className={displayOnXs}>·</div>
      <a href={`${sealCredLink}/terms`} target="_blank">
        Terms of service
      </a>
    </div>
  )
}
