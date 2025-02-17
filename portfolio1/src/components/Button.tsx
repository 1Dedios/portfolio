export default function Button({
  text,
  className,
  disabled,
}: {
  text: string;
  className: string;
  disabled?: boolean;
}) {
  return <button className={className}>{text}</button>;
}
