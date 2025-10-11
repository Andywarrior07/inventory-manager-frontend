interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;

  [key: string]: unknown;
}

export const PlusIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
  className,
  ...props
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 4v16m8-8H4" />
    </svg>
  );
};