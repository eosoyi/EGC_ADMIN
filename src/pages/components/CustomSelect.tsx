import ComboboxData from "../../interfaces/ComboboxData";
import "../../styles/custom-select.css";

interface Props {
  label?: string;
  request?: boolean;
  name: string;
  initValue?: boolean;
  disabled?: boolean;
  dataList: ComboboxData[];
}

export const CustomSelect = ({
  label,
  request = false,
  name,
  initValue = false,
  disabled = false,
  dataList,
}: Props) => {
  return (
    <div className="container-custom-select">
      <label htmlFor={name}>
        {label} {request && "*"}
      </label>
      <div className="custom-select">
        <select name={name} disabled={disabled}>
          {initValue && (
            <option key="0" value={0}>
              Seleccione
            </option>
          )}
          {dataList.map((item) => (
            <option key={item.id}>{item.value}</option>
          ))}
        </select>
        <div className="select-arrow"></div>
      </div>
    </div>
  );
};
