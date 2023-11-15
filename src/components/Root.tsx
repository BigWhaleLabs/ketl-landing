import {
  classnames,
  display,
  flexDirection,
  justifyContent,
  minHeight,
  minWidth,
  position,
  zIndex,
} from 'classnames/tailwind'
import BackgroundVideo from 'components/BackgroundVideo'
import ChildrenProp from 'models/ChildrenProp'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ProductHunt from 'components/ProductHunt'

const root = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-between'),
  minWidth('min-w-full'),
  minHeight('min-h-screen'),
  position('relative'),
  zIndex('z-10')
)

export default function ({ children }: ChildrenProp) {
  return (
    <div className={root}>
      <BackgroundVideo />
      <ProductHunt />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
