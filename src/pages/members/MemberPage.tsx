import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import "./styles/member-page.css";
import ComboboxData from "../../interfaces/ComboboxData";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MemberModal } from "./components/MemberModal";
import { CancelMemberModal } from "./components/CancelMemberModal";

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

const careersData: ComboboxData[] = [
  {
    id: 1,
    value: "Basicos",
  },
  {
    id: 2,
    value: "Perito contador",
  },
  {
    id: 3,
    value: "Secretariado bilinguie",
  },
  {
    id: 4,
    value: "Secretariado oficinista",
  },
  {
    id: 5,
    value: "Otro",
  },
];

const squadData: ComboboxData[] = [
  {
    id: 1,
    value: "Gastadores",
  },
  {
    id: 2,
    value: "Batonistas",
  },
  {
    id: 3,
    value: "Marcadoras",
  },
  {
    id: 4,
    value: "Tamborines",
  },
  {
    id: 5,
    value: "Redoblantes",
  },
];

const positionData: ComboboxData[] = [
  {
    id: 1,
    value: "Comandante",
  },
  {
    id: 2,
    value: "Subcomandante",
  },
  {
    id: 3,
    value: "Integrante",
  },
];

const stateData: ComboboxData[] = [
  {
    id: 0,
    value: "Todos",
  },
  {
    id: 1,
    value: "Nuevo",
  },
  {
    id: 2,
    value: "Antiguo",
  },
];

const users = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  nombre: `Usuario ${i + 1}`,
  escuadra: i % 2 === 0 ? "Alpha" : "Beta",
  establecimiento: i % 2 === 0 ? "EGC Central" : "EGC Norte",
  carrera: i % 2 === 0 ? "Ingeniería" : "Derecho",
  estado: i % 2 === 0,
  puesto: i % 2 === 0 ? "Administrador" : "Integrante",
}));

export const MemberPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  useEffect(() => {
    if (openCancelModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openCancelModal]);

  return (
    <>
      {openModal && <MemberModal onClose={() => setOpenModal(false)} />}
      {openCancelModal && (
        <CancelMemberModal onClose={() => setOpenCancelModal(false)} />
      )}
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
            <button
              type="button"
              className="member-page-add-button"
              onClick={() => setOpenModal(true)}
            >
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
            <div className="member-page-container-custom-select">
              <label>Establecimiento</label>
              <div className="member-page-custom-select">
                <select>
                  {establishmentData.map((item) => (
                    <option key={item.id}>{item.value}</option>
                  ))}
                </select>
                <div className="member-page-select-arrow"></div>
              </div>
            </div>

            <div className="member-page-container-custom-select">
              <label>Carrera</label>
              <div className="member-page-custom-select">
                <select>
                  {careersData.map((item) => (
                    <option key={item.id}>{item.value}</option>
                  ))}
                </select>
                <div className="member-page-select-arrow"></div>
              </div>
            </div>

            <div className="member-page-container-custom-select">
              <label>Escuadra</label>
              <div className="member-page-custom-select">
                <select>
                  {squadData.map((item) => (
                    <option key={item.id}>{item.value}</option>
                  ))}
                </select>
                <div className="member-page-select-arrow"></div>
              </div>
            </div>

            <div className="member-page-container-custom-select">
              <label>Puesto</label>
              <div className="member-page-custom-select">
                <select>
                  {positionData.map((item) => (
                    <option key={item.id}>{item.value}</option>
                  ))}
                </select>
                <div className="member-page-select-arrow"></div>
              </div>
            </div>

            <div className="member-page-container-custom-select">
              <label>Estado</label>
              <div className="member-page-custom-select">
                <select>
                  {stateData.map((item) => (
                    <option key={item.id}>{item.value}</option>
                  ))}
                </select>
                <div className="member-page-select-arrow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="member-page-table-container">
          <div className="member-page-table-header">
            <strong>Lista de usuarios</strong>
            <p>Gestiona la información de todos los integrantes</p>
          </div>
          <div className="member-page-table-wrapper">
            {/* Encabezados */}
            <div className="member-page-table-row header">
              <div className="cell header">NOMBRE COMPLETO</div>
              <div className="cell header">ESTABLECIMIENTO</div>
              <div className="cell header">ESCUADRA</div>
              <div className="cell header">CARRERA</div>
              <div className="cell header">ESTADO</div>
              <div className="cell header">PUESTO</div>
              <div className="cell header">ACCIONES</div>
            </div>

            {/* Filas */}
            {users.map((user) => (
              <div className="member-page-table-row" key={user.id}>
                <div className="cell">{user.nombre}</div>
                <div className="cell">
                  <p className="cell-squad">{user.escuadra}</p>
                </div>
                <div className="cell">{user.establecimiento}</div>
                <div className="cell">{user.carrera}</div>
                <div className="cell">
                  <p
                    className={`${
                      user.estado ? "cell-state-active" : "cell-state-inactive"
                    }`}
                  >
                    {user.estado ? "Antiguo" : "Nuevo"}
                  </p>
                </div>
                <div className="cell">{user.puesto}</div>
                <div className="cell actions">
                  <div className="action-menu">
                    <button className="action-btn">⋮</button>
                    <div className="dropdown">
                      <button type="button">
                        <FaPenToSquare /> Editar
                      </button>
                      <button type="button">
                        <FaDownload /> Descargar QR
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenCancelModal(true)}
                      >
                        <FaTrash /> Dar baja
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="member-page-filter-container member-page-nav-table">
          <span>Página 1 de 2</span>
          <div className="member-page-nav-container-button">
            <button>
              <FaArrowLeft /> Anterior
            </button>
            <button>
              Siguiente <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPage;
