import {
  classnames,
  display,
  minHeight,
  minWidth,
  position,
} from 'classnames/tailwind'
import BackgroundVideo from 'components/BackgroundVideo'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  display('flex'),
  minWidth('min-w-full'),
  minHeight('min-h-screen'),
  position('relative')
)

export default function ({ children }: ChildrenProp) {
  return (
    <div className={root}>
      <BackgroundVideo />
      {children}
    </div>
  )
}
