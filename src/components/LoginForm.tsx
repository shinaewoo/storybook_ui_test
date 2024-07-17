import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        errorMessage="이메일을 확인해주세요"
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onIconClick={() => setEmail("")}
        id="email"
        placeholder="이메일을 입력해주세요"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        isError={false}
      />
      <Label htmlFor="password">비밀번호</Label>
      <DefaultTextField
        errorMessage="비밀번호를 확인해주세요"
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onIconClick={() => setPassword("")}
        id="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        isError={false}
      />
      <PrimaryButton
        theme="dark"
        disabled={!email || !password}
        children="로그인"
        onClick={() => {}}
      />
    </div>
  );
}
