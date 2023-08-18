import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const pathStyle = classnames(
  strokeWidth('stroke-3'),
  stroke('stroke-secondary')
)

export default function () {
  return (
    <svg
      height="28"
      viewBox="0 0 17 28"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathStyle}
        d="M8.5 2V26M8.5 26L2 19.6327M8.5 26L15 19.6327"
      />
    </svg>
  )
}
