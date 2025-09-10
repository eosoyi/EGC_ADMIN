import "../../styles/custom-input.css";

interface Props {
  label?: string;
  request?: boolean;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.JSX.Element;
}

export const CustomInput = ({
  label,
  request = false,
  name,
  type = "text",
  placeholder,
  disabled = false,
  icon,
}: Props) => {
  return (
    <div className="container-custom-input">
      <label htmlFor={name}>
        {label} {request ? "*" : ""}
      </label>
      <div className="custom-input">
        <div className="member-page-svg_icon">{icon}</div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          style={{ paddingLeft: `${icon ? "42px" : "12px"}` }}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
