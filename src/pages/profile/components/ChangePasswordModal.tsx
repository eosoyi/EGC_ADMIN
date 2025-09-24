import { FaTimes } from "react-icons/fa";

import { CustomInput } from "../../components/CustomInput";
import "../styles/change-password-modal.css";
import { useForm } from "../../../hooks/useForm";
import { FormEvent, useState } from "react";
import Utils from "../../../utils/Utils";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

interface FormData {
  newPassword: string;
  confirmNewPassword: string;
}

export const ChangePasswordModal = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { onChange, formData } = useForm<FormData>({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "Ingrese una nueva contraseña";
    }

    if (formData.newPassword.trim() && formData.newPassword.length < 8) {
      newErrors.newPassword = "La contraseña debe ser al menos de 8 caracteres";
    }

    if (
      formData.newPassword.length >= 8 &&
      !Utils.validarPassword(formData.newPassword)
    ) {
      newErrors.newPassword =
        "La contraseña debe poseer Mayusculas | Minusculas | Números | caracteres especiales";
    }

    if (!formData.confirmNewPassword.trim()) {
      newErrors.confirmNewPassword = "Confirma la contraseña";
    }

    if (
      formData.confirmNewPassword.trim() &&
      formData.newPassword !== formData.confirmNewPassword
    ) {
      newErrors.confirmNewPassword = "La contraseña no es igual";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(formData);
    navigate("/profile", { state: { reload: true }});
  };

  return (
    <>
      <div className="container-main-change-password-modal">
        <div className="content-change-password-modal">
          <div className="content-header-change-password-modal">
            <strong>Cambiar Contraseña</strong>
            <FaTimes className="icon" onClick={onClose} />
          </div>

          <form
            className="content-form-change-password-modal"
            onSubmit={handleChangePassword}
          >
            <CustomInput
              name="newPassword"
              value={formData.newPassword}
              label="Nueva Contraseña"
              placeholder="Minímo 8 caracteres"
              type="password"
              request
              onChange={onChange}
              errorMessage={errors.newPassword}
            />
            <CustomInput
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              label="Confirmar Nueva Contraseña"
              placeholder="Confirma la nueva contraseña"
              type="password"
              request
              onChange={onChange}
              errorMessage={errors.confirmNewPassword}
            />

            <div className="buttons-form-change-password-modal">
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
