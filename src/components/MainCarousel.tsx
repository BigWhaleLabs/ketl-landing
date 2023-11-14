import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useRef, useState } from 'react'
import ChevronLeft from 'icons/ChevronLeft'
import ChevronRight from 'icons/ChevronRight'
import Slider from 'react-slick'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  fontSize,
  gap,
  height,
  justifyContent,
  margin,
  opacity,
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
  height('h-20')
)
const slide = classnames(
  width('w-full'),
  height('h-20'),
  display('!flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
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
const indicator = (isActive: boolean) =>
  classnames(
    width({ 'w-1.5': !isActive, 'w-2': isActive }),
    height({ 'h-1.5': !isActive, 'h-2': isActive }),
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
  '✅ Used by 500 of the top founders and VCs daily',
  '📈 Stay in the know for industry alpha',
]
const slideDuration = 2500

export default function MainCarousel() {
  const sliderRef = useRef<Slider>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className={wrapper}>
      <div className={container}>
        <Slider
          autoplay
          infinite
          afterChange={(index: number) => setCurrentSlide(index)}
          arrows={false}
          autoplaySpeed={slideDuration}
          dots={false}
          ref={sliderRef}
          slidesToShow={1}
        >
          {messages.map((message) => (
            <div className={slide} key={message}>
              {message}
            </div>
          ))}
        </Slider>
      </div>
      <div className={indicatorContainer}>
        <button
          className={indicatorButton}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeft />
        </button>
        {messages.map((_, i) => (
          <div className={indicator(i === currentSlide)} key={i}></div>
        ))}
        <button
          className={indicatorButton}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
