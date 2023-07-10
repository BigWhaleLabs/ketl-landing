import { useLocation } from 'wouter-preact'
import RiveLogo from 'components/RiveLogo'
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
  height('h-16')
)

const logo = classnames(width('w-44'), height('h-16'), cursor('cursor-pointer'))

export default function () {
  const [location, setLocation] = useLocation()

  if (location === '/') return null

  return (
    <div className={wrapper}>
      <a
        className={logo}
        onClick={() => setLocation('/')}
        onTouchStart={() => setLocation('/')}
      >
        <RiveLogo />
      </a>
    </div>
  )
}
