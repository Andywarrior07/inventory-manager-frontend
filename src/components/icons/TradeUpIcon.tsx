interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const TradeUpIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M20 13V8h-5" />
        <path
          d="m20 8l-5 5c-.883.883-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373s-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373l-3 3" />
      </g>
    </svg>
  );
};