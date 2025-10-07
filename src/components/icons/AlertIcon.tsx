interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const AlertIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
        <path strokeWidth="1.5"
              d="M13.925 21h-3.85c-4.63 0-6.945 0-7.799-1.506c-.853-1.506.331-3.503 2.7-7.495L6.9 8.753C9.176 4.918 10.313 3 12 3s2.824 1.918 5.1 5.753L19.023 12c2.369 3.992 3.553 5.989 2.7 7.495C20.87 21 18.555 21 13.924 21M12 17v-4.5" />
        <path strokeWidth="1.8" d="M12 8.998v-.01" />
      </g>
    </svg>
  );
};