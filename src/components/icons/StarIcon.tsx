interface Props {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const StarIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  fill = 'none',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} {...props}>
      <path fill={fill} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}
            d="m13.728 3.444l1.76 3.549c.24.494.88.968 1.42 1.058l3.189.535c2.04.343 2.52 1.835 1.05 3.307l-2.48 2.5c-.42.423-.65 1.24-.52 1.825l.71 3.095c.56 2.45-.73 3.397-2.88 2.117l-2.99-1.785c-.54-.322-1.43-.322-1.98 0L8.019 21.43c-2.14 1.28-3.44.322-2.88-2.117l.71-3.095c.13-.585-.1-1.402-.52-1.825l-2.48-2.5C1.39 10.42 1.86 8.929 3.899 8.586l3.19-.535c.53-.09 1.17-.564 1.41-1.058l1.76-3.549c.96-1.925 2.52-1.925 3.47 0" />
    </svg>
  );
};