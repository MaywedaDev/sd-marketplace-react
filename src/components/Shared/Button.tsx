import { Icon } from "@iconify/react";

type ButtonProps = {
  className?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};
export default function Button({
  className,
  disabled,
  onClick,
  children,
  icon,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      aria-label={icon ? `Button with icon ${icon}` : "Button"}
      className={`w-full bg-primary hover:bg-secondary border border-primary hover:!border-secondary text-white hover:!text-black p-3 rounded flex justify-center items-center ${className}`}
    >
      {icon && <Icon icon={icon} height={28} className="mr-2" />}
      {children}
    </button>
  );
}
