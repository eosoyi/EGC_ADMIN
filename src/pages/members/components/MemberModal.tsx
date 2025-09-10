import { FaQrcode, FaTimes } from "react-icons/fa";
import "../styles/member-modal.css";
import { CustomInput } from "../../components/CustomInput";
import ComboboxData from "../../../interfaces/ComboboxData";
import { CustomSelect } from "../../components/CustomSelect";
import { FaFloppyDisk, FaXmark } from "react-icons/fa6";

interface Props {
  onClose: () => void;
}

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

const degrees: ComboboxData[] = [
  {
    id: 1,
    value: "Primero",
  },
  {
    id: 2,
    value: "Segundo",
  },
  {
    id: 3,
    value: "Tercero",
  },
  {
    id: 4,
    value: "Cuarto",
  },
  {
    id: 5,
    value: "Quinto",
  },
  {
    id: 6,
    value: "Sexto",
  },
  {
    id: 7,
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

const states: ComboboxData[] = [
  {
    id: 0,
    value: "Inactivo",
  },
  {
    id: 1,
    value: "Activo",
  },
];

const isNewData: ComboboxData[] = [
  {
    id: 0,
    value: "No",
  },
  {
    id: 1,
    value: "Si",
  },
];

export const MemberModal = ({ onClose }: Props) => {
  return (
    <>
      <div className="container-main-member-modal">
        <div className="content-member-modal">
          <div className="content-header-member-modal">
            <strong>Crear Usuario</strong>
            <FaTimes className="icon" onClick={onClose} />
          </div>

          <form method="POST" className="form-member-modal">
            <div className="form-header-member-modal">
              <div className="personal-info-member-modal">
                <div className="qr-content-member-modal">
                  <span>Código QR</span>
                  <FaQrcode className="icon" />
                </div>
                <div className="personal-inputs-member-modal">
                  <span>Información Personal</span>
                  <div className="container-input-member-modal">
                    <CustomInput name="names" label="Nombres" request />
                  </div>
                  <div className="container-input-member-modal">
                    <CustomInput name="lastname" label="Apellidos" request />
                  </div>
                  <div className="container-input-member-modal">
                    <CustomInput
                      name="yearsOld"
                      label="Edad"
                      type="number"
                      request
                    />
                  </div>
                  <div className="container-input-member-modal">
                    <CustomInput name="tel" label="Teléfono" request />
                  </div>
                </div>
              </div>
              <div className="form-other-info">
                <div className="other-info-member-modal">
                  <div className="form-academic-information-member-modal">
                    <span>Información Académica</span>

                    <div className="inputs-grid">
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={establishmentData}
                          name="Establecimiento"
                          label="Establecimiento"
                          initValue
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput
                          name="lastname"
                          label="Nombre establecimiento"
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={careersData}
                          name="career"
                          label="Carrera"
                          initValue
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput
                          name="lastname"
                          label="Nombre carrera"
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={degrees}
                          name="degrees"
                          label="Grado"
                          initValue
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput
                          name="lastname"
                          label="Nombre grado"
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput name="lastname" label="Sección" request />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="other-info-member-modal">
                  <div className="form-academic-information-member-modal">
                    <span>Información de la Banda</span>

                    <div className="inputs-grid">
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={squadData}
                          name="squad"
                          label="Escuadra"
                          initValue
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={positionData}
                          name="position"
                          label="Puesto"
                          initValue
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={isNewData}
                          name="isNew"
                          label="¿Es nuevo integrante?"
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput name="lastname" label="Usuario" request />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomSelect
                          dataList={states}
                          name="state"
                          label="Estado"
                          request
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="other-info-member-modal">
                  <div className="form-academic-information-member-modal">
                    <span>Información del Encargado</span>
                    <div className="inputs-grid">
                      <div className="container-input-member-modal">
                        <CustomInput
                          name="lastname"
                          label="Nombre del encargado"
                          request
                        />
                      </div>
                      <div className="container-input-member-modal">
                        <CustomInput
                          name="lastname"
                          label="Teléfono del encargado"
                          request
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-footer-member-modal">
              <button type="button">
                <FaXmark />
                Cancelar
              </button>
              <button type="submit">
                <FaFloppyDisk /> Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
