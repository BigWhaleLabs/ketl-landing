import { useLocation } from 'wouter-preact'
import RiveLogo from 'components/RiveLogo'
import classnames, {
  alignItems,
  cursor,
  display,
  height,
  justifyContent,
  margin,
  transitionProperty,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center', 'md:justify-start'),
  alignItems('items-center'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-16'),
  transitionProperty('transition-all')
)

const logo = classnames(width('w-44'), height('h-16'), cursor('cursor-pointer'))

export default function () {
  const [, setLocation] = useLocation()

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
