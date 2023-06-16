import {
  classnames,
  display,
  margin,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  position,
  zIndex,
} from 'classnames/tailwind'
import BackgroundVideo from 'components/BackgroundVideo'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  display('flex'),
  margin('mx-auto'),
  maxWidth('max-w-4xl'),
  zIndex('z-20'),
  padding('px-4', 'py-8'),
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
