interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const HouseIcon = ({ width = 24, height = 24, color = '#000000', strokeWidth = 1.5, className, ...props }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} {...props}>
      <path fill={color} d="M4 19h2v-8h12v8h2V8.35l-8-3.2l-8 3.2zm-2 2V7l10-4l10 4v14h-6v-8H8v8zm7 0v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2zM6 11h12z" />
    </svg>
  );
}
