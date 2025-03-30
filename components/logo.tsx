export default function Logo({ className = "", width = 50, height = 50 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="95" fill="#F0FFF4" stroke="#2F855A" strokeWidth="10" />
      <path
        d="M100 30C85 30 65 45 65 70C65 95 85 110 100 110C115 110 135 95 135 70C135 45 115 30 100 30Z"
        fill="#68D391"
      />
      <path
        d="M65 70C65 95 85 110 100 110C115 110 135 95 135 70"
        stroke="#2F855A"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M100 110V160" stroke="#8B5E34" strokeWidth="8" strokeLinecap="round" />
      <path
        d="M80 130C80 130 90 140 100 140C110 140 120 130 120 130"
        stroke="#8B5E34"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M75 150C75 150 90 160 100 160C110 160 125 150 125 150"
        stroke="#8B5E34"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M60 90C60 90 70 100 80 100C90 100 100 90 100 90"
        stroke="#2F855A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M140 90C140 90 130 100 120 100C110 100 100 90 100 90"
        stroke="#2F855A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

