import { FaPlus } from "react-icons/fa";
import "./styles/member-page.css";

export const MemberPage = () => {
  return (
    <>
      <div className="member-page-main-container">
        <div className="member-page-header">
          <div className="member-page-header-content">
            <strong>Gestión de Usuarios</strong>
            <p>Administra los integrantes del sistema de manera eficiente</p>
          </div>
          <div className="member-page-header-content">
            <div className="member-page-general-acount">
              <p>Total de usuarios</p>
              <span>15</span>
            </div>
            <button className="member-page-add-button">
              <FaPlus />
              Nuevo
            </button>
          </div>
        </div>

        <div className="member-page-filter-container">
          <div className="member-page-custom-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="member-page-svg_icon bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
            <input
              className="member-page-input"
              type="search"
              placeholder="Buscar por nombre"
            />
          </div>
        </div>

        <div className="member-page-filter-container">
          <strong>Filtros</strong>
          <div className="member-page-combobox-filter">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPage;
