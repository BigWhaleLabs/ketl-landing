import { Link } from 'wouter-preact'
import classnames, {
  alignItems,
  cursor,
  display,
  height,
  justifyContent,
  padding,
  position,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  width('w-screen'),
  position('fixed'),
  display('flex'),
  justifyContent('justify-center', 'md:justify-start'),
  alignItems('items-center'),
  padding('p-12'),
  height('h-12')
)
const logo = classnames(width('w-40'), cursor('cursor-pointer'))

export default function () {
  return (
    <div className={wrapper}>
      <Link className={logo} href="/">
        <img alt="ketl" className={logo} src="/media/logo.svg" />
      </Link>
    </div>
  )
}
