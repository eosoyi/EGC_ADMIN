import { FaExclamation } from "react-icons/fa";
import "../styles/cancel-member-modal.css";
import { CustomTextarea } from "../../components/CustomTextarea";

interface Props {
  onClose: () => void;
}

export const CancelMemberModal = ({ onClose }: Props) => {
  return (
    <>
      <div className="container-main-cancel-member-modal">
        <div className="content-cancel-member-modal">
          <FaExclamation className="icon" />
          <strong>Confirmar Acción</strong>
          <p>
            ¿Estás seguro de que deseas dar de baja a Carlos Eduardo García?
          </p>
          <form className="form-cancel-member-modal">
            <div className="content-comment-cancel-modal">
              <CustomTextarea />
              {/* <div className="container-custom-textarea">
                <label htmlFor="comment">Comentario</label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Agrega un comentario"
                ></textarea>
              </div> */}
            </div>
            <div className="container-buttons-cancel-member-modal">
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
              <button type="button">Dar de baja</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
