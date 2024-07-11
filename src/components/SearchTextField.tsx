import { useState } from "react";
import IconButton from "./IconButton";

interface ISearchTextFieldProps {
  value: string;
  onChange: () => void;
  onIconClick: () => void;
}

export default function SearchTextField({
  value,
  onChange,
  onIconClick,
}: ISearchTextFieldProps) {
  const [placeholder, setPlaceholder] = useState("검색어를 입력해주세요.");
  return (
    <div
      className={`flex justify-between w-full border ${placeholder !== "" ? "border-primary" : "border-secondary"}`}
    >
      <div className="w-full flex gap-2">
        {placeholder !== "" && !value && (
          <img src="/icons/ic-search.svg" alt="search" />
        )}

        <input
          className="w-full outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("검색어를 입력해주세요.")}
          onChange={onChange}
        />
      </div>
      {value && (
        <IconButton
          alt="cancel"
          iconPath="/icons/ic-delete-dark.svg"
          onClick={onIconClick}
        />
      )}
    </div>
  );
}
