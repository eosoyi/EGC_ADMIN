import { FaFilter } from "react-icons/fa";
import ComboboxData from "../../interfaces/ComboboxData";
import { CustomSelect } from "../components/CustomSelect";
import "./styles/dashboard-page.css";

const establishmentData: ComboboxData[] = [
  {
    id: 1,
    value: "Enrique Gomez Carrillo",
  },
  {
    id: 2,
    value: "Romulo Gallego",
  },
  {
    id: 3,
    value: "Otro",
  },
];

export const DashboardPage = () => {
  return (
    <>
      <div className="dashboard-page-main-content">
        <div className="dashboard-page-header">
          <div className="dashboard-page-header-content">
            <strong>Dashboard de Gestión</strong>
            <p>Análisis y estadísticas de la banda de guerra</p>
          </div>

          <div className="dashboard-page-header-content">
            <div className="dashboard-page-general-acount">
              <span>15</span>
              <p>Total de integrantes</p>
            </div>
          </div>
        </div>

        <div className="dashboard-page-filter-container">
          <strong>
            <FaFilter /> Filtros
          </strong>
          <div className="dashboard-page-combobox-filter">
            <CustomSelect
              dataList={establishmentData}
              name="establecimiento"
              initValue
              label="Establecimiento"
            />
            <CustomSelect
              dataList={establishmentData}
              name="establecimiento"
              initValue
              label="Carrera"
            />
            <CustomSelect
              dataList={establishmentData}
              name="establecimiento"
              initValue
              label="Escuadra"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
