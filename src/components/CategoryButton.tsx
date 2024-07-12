import { flexColumnCenter } from "../style/flex";

interface ICategoryButton {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ICategoryButton) {
  return (
    <button
      className={`rounded-button-default border border-primary text-primary text-base font-bold pl-[22px] pr-[21px] py-4 ${flexColumnCenter}`}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
}
