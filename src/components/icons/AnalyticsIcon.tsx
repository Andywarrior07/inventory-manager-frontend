interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const AnalyticsIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m4 1h1M7 7h4" />
        <path strokeLinejoin="round"
              d="M5 20c1.07-1.947 2.523-6.981 5.306-6.981c1.924 0 2.422 2.453 4.308 2.453C17.857 15.472 17.387 10 21 10" />
      </g>
    </svg>
  );
};