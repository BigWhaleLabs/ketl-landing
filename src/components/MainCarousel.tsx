import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import ChevronLeft from 'icons/ChevronLeft'
import ChevronRight from 'icons/ChevronRight'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flex,
  flexDirection,
  fontSize,
  gap,
  height,
  justifyContent,
  margin,
  opacity,
  overflow,
  scrollSnap,
  textAlign,
  textColor,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-6')
)
const container = classnames(
  width('w-64', 'xs:w-80', 'md:w-104'),
  height('h-20'),
  display('inline-flex'),
  overflow('overflow-x-scroll', 'overflow-y-hidden'),
  scrollSnap('snap-x', 'snap-mandatory')
)
const slide = classnames(
  width('w-full'),
  display('flex'),
  flex('flex-none'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  scrollSnap('snap-start'),
  textAlign('text-center'),
  fontSize('text-lg', 'md:text-xl'),
  textColor('text-white')
)
const indicatorContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  gap('gap-1')
)
const indicator = (isActive: boolean, isPrevOrNext: boolean) =>
  classnames(
    width({
      'w-1.5': !isActive && !isPrevOrNext,
      'w-2': isActive || isPrevOrNext,
    }),
    height({
      'h-1.5': !isActive && !isPrevOrNext,
      'h-2': isActive || isPrevOrNext,
    }),
    backgroundColor({ 'bg-blue-light': !isActive, 'bg-secondary': isActive }),
    borderRadius('rounded-full'),
    opacity({ 'opacity-50': !isActive })
  )
const indicatorButton = classnames(margin('mx-2'))

const messages = [
  '🤫 Most used anon app for YC alums',
  '🔮 Get no BS thoughts and diligence on founders, VCs, or startups',
  '🐳 Chat anon with 1B+ AUM and other elite VCs',
  '🧠 #1 app to give and get unfiltered advice',
  '✅ Used by 400 of the top founders and VCs daily',
  '📈 Stay in the know for industry alpha',
]
const slideDuration = 2500
const supportsScrollEnd = 'onscrollend' in window

export default function MainCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const prevSlide = currentSlide === 0 ? messages.length - 1 : currentSlide - 1
  const nextSlide = (currentSlide + 1) % messages.length

  const handleNextSlide = useCallback(() => {
    scrollContainerRef.current?.scrollBy({
      behavior: 'smooth',
      left: scrollContainerRef.current?.offsetWidth,
    })
  }, [])

  const handlePrevSlide = useCallback(() => {
    scrollContainerRef.current?.scrollBy({
      behavior: 'smooth',
      left: -scrollContainerRef.current?.offsetWidth,
    })
  }, [])

  const handleScrollEnd = useCallback(
    (e: Event) => {
      if (!(e.target instanceof HTMLElement)) return
      if (e.target.scrollLeft === 0) setCurrentSlide(prevSlide)
      if (
        scrollContainerRef.current?.offsetWidth &&
        e.target.scrollLeft === scrollContainerRef.current?.offsetWidth * 2
      )
        setCurrentSlide(nextSlide)
    },
    [prevSlide, nextSlide]
  )

  useLayoutEffect(() => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.offsetWidth
    }
  }, [currentSlide])

  useEffect(() => {
    const interval = setTimeout(handleNextSlide, slideDuration)
    return () => clearTimeout(interval)
  }, [currentSlide, handleNextSlide])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    scrollContainer?.addEventListener(
      supportsScrollEnd ? 'scrollend' : 'scroll',
      handleScrollEnd
    )
    return () =>
      scrollContainer?.removeEventListener(
        supportsScrollEnd ? 'scrollend' : 'scroll',
        handleScrollEnd
      )
  }, [handleScrollEnd])

  return (
    <div className={wrapper}>
      <div className={`${container} scrollbar-hide`} ref={scrollContainerRef}>
        <div className={slide}>{messages[prevSlide]}</div>
        <div className={slide}>{messages[currentSlide]}</div>
        <div className={slide}>{messages[nextSlide]}</div>
      </div>
      <div className={indicatorContainer}>
        <button className={indicatorButton} onClick={handlePrevSlide}>
          <ChevronLeft />
        </button>
        {messages.map((_, i) => (
          <div
            key={i}
            className={indicator(
              i === currentSlide,
              i === prevSlide || i === nextSlide
            )}
          ></div>
        ))}
        <button className={indicatorButton} onClick={handleNextSlide}>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
