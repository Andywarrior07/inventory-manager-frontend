interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const QRIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M3 6c0-1.414 0-2.121.44-2.56C3.878 3 4.585 3 6 3s2.121 0 2.56.44C9 3.878 9 4.585 9 6s0 2.121-.44 2.56C8.122 9 7.415 9 6 9s-2.121 0-2.56-.44C3 8.122 3 7.415 3 6Zm0 12c0-1.414 0-2.121.44-2.56C3.878 15 4.585 15 6 15s2.121 0 2.56.44C9 15.878 9 16.585 9 18s0 2.121-.44 2.56C8.122 21 7.415 21 6 21s-2.121 0-2.56-.44C3 20.122 3 19.415 3 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h6m3-9v5" />
        <path
          d="M15 6c0-1.414 0-2.121.44-2.56C15.878 3 16.585 3 18 3s2.121 0 2.56.44C21 3.878 21 4.585 21 6s0 2.121-.44 2.56C20.122 9 19.415 9 18 9s-2.121 0-2.56-.44C15 8.122 15 7.415 15 6Z" />
        <path strokeLinecap="round"
              d="M21 12h-6c-1.414 0-2.121 0-2.56.44C12 12.878 12 13.585 12 15m0 2.77v2.768M15 15v1.5c0 1.446.784 1.5 2 1.5a1 1 0 0 1 1 1m-2 2h-1m3-6c1.414 0 2.121 0 2.56.44s.44 1.148.44 2.564s0 2.125-.44 2.565c-.32.32-.783.408-1.56.431" />
      </g>
    </svg>
  );
};