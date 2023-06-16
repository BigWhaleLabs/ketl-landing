import classnames, {
  boxShadow,
  boxShadowColor,
  stroke,
  strokeWidth,
} from 'classnames/tailwind'

const pathStyle = classnames(
  strokeWidth('stroke-2'),
  boxShadow('shadow-lg'),
  boxShadowColor('shadow-blue-light'),
  stroke('stroke-blue-light')
)

export default function () {
  return (
    <svg
      fill="none"
      height="84"
      viewBox="0 0 84 84"
      width="84"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathStyle}
        d="M42.001 82.0051C19.9091 82.0051 2 64.096 2 42.004C2 19.9121 19.9091 2.00299 42.001 2.00299"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M41.999 2.00004C64.0909 2.00004 82 19.9091 82 42.0011C82 64.0931 64.0909 82.0021 41.999 82.0021"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M44.0497 62.2008C52.6834 62.2008 60.6782 59.4656 67.2148 54.8144"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M42.0012 71.5594C29.8125 71.5594 19.9316 61.6786 19.9316 49.4899C19.9316 37.3012 29.8125 49.4897 42.0012 49.4897"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M19.9281 30.1747C19.9281 25.2815 23.7878 21.3148 28.549 21.3148C33.3102 21.3148 37.1699 25.2815 37.1699 30.1748C37.1699 35.068 33.3102 30.1748 28.549 30.1748C23.7878 30.1748 19.9281 35.068 19.9281 30.1747Z"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M25.9316 45.0765L25.9316 63.5379"
        stroke-linecap="round"
      />
      <path
        className={pathStyle}
        d="M32.0859 47.8116L32.0859 68.84"
        stroke-linecap="round"
      />
      <line
        className={pathStyle}
        stroke-linecap="round"
        x1="37.9805"
        x2="37.9805"
        y1="50.3995"
        y2="70.1587"
      />
      <circle
        className={pathStyle}
        cx="53.2153"
        cy="27.0399"
        r="6.82862"
        stroke-linecap="round"
      />
    </svg>
  )
}
