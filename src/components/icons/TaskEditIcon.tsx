interface Props {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const TaskEditIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  fill = 'none',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"
         className={className} {...props}>
      <g fill={fill} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
        <path d="M13.5 2h-5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3M7 15h3.429M7 11h8" />
        <path
          d="M19 12V9.483c0-2.829 0-4.243-.879-5.122c-.641-.64-1.567-.814-3.121-.861M11 22H9c-2.828 0-4.243 0-5.121-.88C3 20.243 3 18.829 3 16V9.482c0-2.829 0-4.243.879-5.122c.641-.64 1.568-.814 3.12-.861m8.738 18.154L14 22l.347-1.737c.07-.352.244-.676.499-.93l4.065-4.066a.91.91 0 0 1 1.288 0l.534.534a.91.91 0 0 1 0 1.288l-4.065 4.065a1.8 1.8 0 0 1-.931.499" />
      </g>
    </svg>
  );
};