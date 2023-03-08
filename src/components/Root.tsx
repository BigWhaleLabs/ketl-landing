import {
  backgroundImage,
  blur,
  classnames,
  display,
  gradientColorStops,
  inset,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  objectFit,
  opacity,
  overflow,
  padding,
  position,
  zIndex,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const container = classnames(
  display('flex'),
  minWidth('min-w-full'),
  minHeight('min-h-screen'),
  position('relative')
)
const videoContainer = classnames(
  position('absolute'),
  inset('inset-0'),
  blur('blur-xl'),
  minWidth('min-w-full'),
  minHeight('min-h-full'),
  maxHeight('max-h-full'),
  overflow('overflow-hidden'),
  objectFit('object-cover')
)
const blueOverlay = classnames(
  position('absolute'),
  inset('inset-0'),
  backgroundImage('bg-gradient-to-b'),
  gradientColorStops('from-blue-start', 'to-blue-end'),
  zIndex('z-20'),
  opacity('opacity-70')
)
const root = classnames(
  margin('mx-auto'),
  maxWidth('max-w-4xl'),
  zIndex('z-20'),
  padding('px-4', 'py-8')
)
export default function ({ children }: ChildrenProp) {
  return (
    <div className={container}>
      <video autoPlay muted loop className={videoContainer}>
        <source src="/media/background.mp4" type="video/mp4" />
      </video>
      <div className={blueOverlay}>
        <div className="absolute inset-0 noise" />
      </div>
      <div className={root}>{children}</div>
    </div>
  )
}
