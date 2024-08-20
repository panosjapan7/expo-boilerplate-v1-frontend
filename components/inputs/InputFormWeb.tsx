// ./components/inputs/InputFormWeb.tsx
import React from "react";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";
import "../../styles/css/form.css";
import IconPasswordHide from "../icons/IconPasswordHide";
import IconPasswordShow from "../icons/IconPasswordShow";

type FormInputWebProps = {
  type: string;
  value: string;
  setValue: (value: string) => void;
  label?: string;
  errorMessage?: string;
  hidePassword?: boolean;
  setHidePassword?: (hidePassword: boolean) => void;
};
const InputFormWeb: React.FC<FormInputWebProps> = ({
  label,
  value,
  type,
  setValue,
  errorMessage,
  hidePassword,
  setHidePassword,
}) => {
  const {
    inputBorderColor,
    inputBorderRadius,
    inputBorderStyle,
    inputBorderWidth,
    inputTextColor,
    themeHeaderTextColor,
  } = useGlobalStyles();

  return (
    <div className="form-label-input-container">
      {label ? (
        <label
          className="form-label-errorMessage"
          style={{
            color: errorMessage ? Colors.danger : themeHeaderTextColor,
          }}
        >
          {`${label} `}
          <span
            style={{
              color: errorMessage ? Colors.danger : themeHeaderTextColor,
            }}
          >
            {errorMessage}
          </span>
        </label>
      ) : null}

      <input
        className="form-input"
        type={
          type === "password" ? (hidePassword ? "password" : "text") : "email"
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          color: inputTextColor,
          borderColor: inputBorderColor,
          borderWidth: inputBorderWidth,
          borderRadius: inputBorderRadius,
          borderStyle: inputBorderStyle,
        }}
        onBlur={() => setValue(value)}
      />

      {type === "password" && setHidePassword && (
        <span
          onClick={() => setHidePassword(!hidePassword)}
          className="showHidePassword"
        >
          {hidePassword ? (
            <IconPasswordShow color={themeHeaderTextColor} size={16} />
          ) : (
            <IconPasswordHide color={themeHeaderTextColor} size={16} />
          )}
        </span>
      )}
    </div>
  );
};

export default InputFormWeb;
