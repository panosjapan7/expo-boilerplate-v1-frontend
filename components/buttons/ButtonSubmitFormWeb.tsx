// ./components/buttons/ButtonSubmitFormWeb.tsx
import { mouseEvents } from "../../hooks/mouseEvents";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import "../../styles/css/form.css";

type ButtonSubmitFormWebProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
  caption: string;
};

const ButtonSubmitFormWeb: React.FC<ButtonSubmitFormWebProps> = ({
  onClick,
  isDisabled,
  caption,
}) => {
  const { handleMouseEnter, handleMouseLeave } = mouseEvents();
  const {
    buttonBorderColor,
    buttonBorderRadius,
    buttonBorderStyle,
    buttonBorderWidth,
    themeBackgroundColor,
    themeHeaderTextColor,
  } = useGlobalStyles();
  return (
    <button
      className="form-submitButton"
      onClick={onClick}
      style={{
        color: themeHeaderTextColor,
        backgroundColor: themeBackgroundColor,
        borderColor: buttonBorderColor,
        borderRadius: buttonBorderRadius,
        borderStyle: buttonBorderStyle,
        borderWidth: buttonBorderWidth,
        opacity: isDisabled ? 0.3 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={() => handleMouseEnter(".form-submitButton")}
      onMouseLeave={() => handleMouseLeave(".form-submitButton")}
      disabled={isDisabled}
    >
      <span>{caption}</span>
    </button>
  );
};

export default ButtonSubmitFormWeb;
