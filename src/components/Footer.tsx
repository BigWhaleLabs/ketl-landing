import classnames, { display, height, margin } from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  margin('my-8', 'mx-0', 'md:mx-18'),
  height('h-12')
)

export default function () {
  return <div className={wrapper} />
}
