import { useState } from "react";

import HIDE from "@/assets/svg/ic-hide.svg";
import UNHIDE from "@/assets/svg/ic-unhide.svg";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  classname?: string;
  style?: React.CSSProperties;
  isdisabled?: boolean | undefined;
  ishidden?: boolean | undefined;
  value: string;
  required?: boolean | undefined;
  error?: string | undefined;
}

export const PasswordInput = ({
  placeholder,
  onChange,
  name,
  classname,
  style,
  isdisabled,
  value,
  required,
  error,
}: Props) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="flex-col-start">
      <label htmlFor={name} className="lbl-input">
        {name}
      </label>
      <div className="flex-row-start">
        <input
          className={classname || "input"}
          style={style}
          type={hidden ? "password" : "text"}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={isdisabled}
          required={required}
        />
        <img
          style={{
            cursor: "pointer",
            display: "absolute",
          }}
          height={24}
          width={24}
          src={hidden ? UNHIDE : HIDE}
          alt="toggle visibility"
          className="password-toggle"
          onClick={() => setHidden(!hidden)}
        />
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
