import { Link, useLocation } from 'wouter-preact'
import classnames, {
  alignItems,
  cursor,
  display,
  height,
  justifyContent,
  margin,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center', 'md:justify-start'),
  alignItems('items-center'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-12')
)
const logo = classnames(width('w-40'), cursor('cursor-pointer'))

export default function () {
  const [location] = useLocation()

  if (location === '/') return null

  return (
    <div className={wrapper}>
      <Link className={logo} href="/">
        <img alt="ketl" className={logo} src="/media/logo.svg" />
      </Link>
    </div>
  )
}
