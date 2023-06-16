import classnames, {
  blur,
  inset,
  maxHeight,
  minHeight,
  minWidth,
  objectFit,
  overflow,
  position,
  zIndex,
} from 'classnames/tailwind'

const videoContainer = classnames(
  position('absolute'),
  inset('inset-0'),
  blur('blur-xl'),
  minWidth('min-w-full'),
  minHeight('min-h-full'),
  maxHeight('max-h-full'),
  overflow('overflow-hidden'),
  objectFit('object-cover'),
  zIndex('-z-1')
)

export default function () {
  return (
    <video
      autoPlay
      loop
      muted
      className={videoContainer}
      src="/media/cover.mp4"
      type="video/mp4"
    />
  )
}
