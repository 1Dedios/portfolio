import { MouseEventHandler } from "@/types/types";

export default function Button({
  text,
  className,
  disabled,
  onClick,
}: {
  text: string;
  className: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {text}
    </button>
  );
}
