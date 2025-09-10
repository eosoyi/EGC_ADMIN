import { ChangeEvent } from "react";
import ComboboxData from "../../interfaces/ComboboxData";
import "../../styles/custom-select.css";

interface Props {
  label?: string;
  request?: boolean;
  name: string;
  initValue?: boolean;
  disabled?: boolean;
  value?: string | number;
  dataList: ComboboxData[];
  errorMessage?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect = ({
  label,
  request = false,
  name,
  initValue = false,
  disabled = false,
  value,
  dataList,
  errorMessage,
  onChange,
}: Props) => {
  return (
    <div className="container-custom-select">
      <label htmlFor={name}>
        {label} {request && "*"}
      </label>
      <div className={`custom-select ${errorMessage ? "has-error" : ""}`}>
        <select
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        >
          {initValue && (
            <option key="0" value={0}>
              Seleccione
            </option>
          )}
          {dataList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.value}
            </option>
          ))}
        </select>
        <div className="select-arrow"></div>
      </div>
      {errorMessage && (
        <span className="custom-select-error">{errorMessage}</span>
      )}
    </div>
  );
};
