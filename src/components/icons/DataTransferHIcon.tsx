interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const DataTransferHIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M19 9H6.659c-1.006 0-1.51 0-1.634-.309c-.125-.308.23-.672.941-1.398L8.211 5M5 15h12.341c1.006 0 1.51 0 1.634.309c.125.308-.23.672-.941 1.398L15.789 19" />
    </svg>
  );
};