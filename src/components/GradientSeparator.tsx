export default function GradientSeparator({
  className,
}: {
  className?: string
}) {
  return (
    <div className={className}>
      <svg fill="none" viewBox="0 0 414 5" xmlns="http://www.w3.org/2000/svg">
        <line
          stroke="url(#paint0_linear_91_7587)"
          stroke-dasharray="6 11"
          stroke-linecap="round"
          stroke-width="4"
          x1="2"
          x2="412"
          y1="2.77148"
          y2="2.77152"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_91_7587"
            x1="28.7855"
            x2="400.737"
            y1="4.77149"
            y2="4.77152"
          >
            <stop stop-color="#75CD7C" />
            <stop offset="0.234016" stop-color="#F3DE62" />
            <stop offset="0.517549" stop-color="#AC71D2" />
            <stop offset="0.760577" stop-color="#59B9F8" />
            <stop offset="1" stop-color="#70CC80" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
