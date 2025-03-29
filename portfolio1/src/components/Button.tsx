import { MouseEventHandler } from "@/types/types";

export default function Button({
  text,
  textClassName,
  className,
  disabled,
  onClick,
}: {
  text: string;
  textClassName?: string | undefined;
  className: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {textClassName ? <p className={textClassName}>{text}</p> : <p>{text}</p>}
    </button>
  );
}
