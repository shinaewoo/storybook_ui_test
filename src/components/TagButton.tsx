interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TagButton({
  children,
  isChecked,
  onClick,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-dark-opacity";

  return (
    <button
      className={`rounded-tag-button px-[10px] border border-white h-[33px] ${buttonStyle} text-sm font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
