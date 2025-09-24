import { FaShield, FaUser } from "react-icons/fa6";
import { FaSave, FaTh, FaUserAlt, FaUsers } from "react-icons/fa";
import { CustomInput } from "../components/CustomInput";
import { CustomSelect } from "../components/CustomSelect";
import "./styles/profile-page.css";
import { useEffect, useState } from "react";
import { ChangePasswordModal } from "./components/ChangePasswordModal";
import { useLocation } from "react-router-dom";

export const ProfilePage = () => {
  const location = useLocation();
  const [changePasswordModal, setChangePasswordModal] =
    useState<boolean>(false);

  useEffect(() => {
    if (location.state?.reload) {
      console.log("refrescando datos ...");
    }
  }, [location.state]);

  return (
    <>
      {changePasswordModal && (
        <ChangePasswordModal onClose={() => setChangePasswordModal(false)} />
      )}
      <div className="profile-page-main-container">
        <div className="profile-page-header">
          <FaUser className="icon" />
          <div className="profile-page-header-content">
            <strong>Erick Osoy</strong>
            <span>Instructor • Percusión</span>
            <p>Administrador del Sistema</p>
          </div>
        </div>

        <form className="profile-page-body-content">
          <div className="profile-page-filter-container">
            <span className="profile-page-subtitle">
              <FaUserAlt /> Información Personal
            </span>
            <div className="profile-inputs-grid">
              <div className="profile-input-modal">
                <CustomInput
                  name="name"
                  value=""
                  label="Nombre"
                  type="text"
                  request
                />
              </div>
              <div className="profile-input-modal">
                <CustomInput
                  name="lastName"
                  value=""
                  label="Apellidos"
                  type="text"
                  request
                />
              </div>
              <div className="profile-input-modal">
                <CustomInput
                  name="phone"
                  value=""
                  label="Teléfono"
                  type="text"
                  request
                />
              </div>
              <div className="profile-input-modal">
                <CustomInput
                  name="email"
                  value=""
                  label="Correo"
                  type="text"
                  request
                />
              </div>
              <div className="profile-input-modal">
                <CustomSelect
                  dataList={[]}
                  name="position"
                  disabled
                  label="Puesto"
                  request
                />
              </div>
              <div className="profile-input-modal">
                <CustomInput
                  name="username"
                  value=""
                  label="Usuario"
                  type="text"
                  disabled
                  request
                />
              </div>
            </div>
          </div>
          {/* aqui el detalle escuadras y seguridad */}
          <div className="profile-page-detail-info">
            <div className="profile-page-wrap-info">
              <span className="profile-page-subtitle">
                <FaUsers /> Escuadras Asignadas
              </span>
              <div className="profile-page-card-squad-container">
                <div className="icon">
                  <FaTh />
                </div>

                <div className="profile-page-card-info">
                  <span>Marcadoras</span>
                  <p>Principal</p>
                </div>
                <span className="profile-page-squad-indicator instructor">
                  Instructor
                </span>
              </div>
              <div className="profile-page-card-squad-container">
                <div className="icon">
                  <FaTh />
                </div>
                <div className="profile-page-card-info">
                  <span>Tamborines</span>
                  <p>Secundaria</p>
                </div>
                <span className="profile-page-squad-indicator">Apoyo</span>
              </div>
              <div className="profile-page-card-squad-container">
                <div className="icon">
                  <FaTh />
                </div>
                <div className="profile-page-card-info">
                  <span>Redoblantes</span>
                  <p>Secundaria</p>
                </div>
                <span className="profile-page-squad-indicator">Apoyo</span>
              </div>
            </div>

            <div className="profile-page-wrap-info">
              <span className="profile-page-subtitle">
                <FaShield /> Seguridad
              </span>
              <div className="profile-page-card-squad-container">
                <div className="profile-page-change-password-container">
                  <div className="profile-page-change-password">
                    <div className="icon">
                      <FaTh />
                    </div>
                    <span>Contraseña</span>
                  </div>
                  <button
                    type="button"
                    className="profile-page-button-change-password"
                    onClick={() => setChangePasswordModal(true)}
                  >
                    <FaShield />
                    Cambiar contraseña
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="profile-page-save-button">
              <FaSave /> Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
