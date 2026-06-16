type Props = {
  className?: string;
};

export default function VerifiedBadge({ className = 'w-4 h-4' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Verified Google review"
    >
      <title>Verified review</title>
      <circle cx="12" cy="12" r="10" fill="#1A73E8" />
      <path
        d="M8.5 12.5l2.5 2.5 5-6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
