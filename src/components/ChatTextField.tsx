import { ChangeEvent, useState } from "react";
import IconButton from "./IconButton";

interface IChatTextFieldProps {
  type?: "text" | "password";
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIconClick: () => void;
}

export default function ChatTextField({
  type = "text",
  value,
  onChange,
  onIconClick,
}: IChatTextFieldProps) {
  const [placeholder, setPlaceholder] = useState("메세지를 입력해주세요.");
  return (
    <div
      className={`w-full bg-primary border ${placeholder !== "" ? "border-white" : "border-secondary"} rounded-chat-text-field flex justify-between items-center gap-4 py-2 px-3`}
    >
      <input
        className="w-full bg-primary text-white outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("메세지를 입력해주세요.")}
        onChange={onChange}
      />
      <IconButton
        alt="upload"
        iconPath="/icons/ic-photo-upload.svg"
        onClick={onIconClick}
      />
    </div>
  );
}
