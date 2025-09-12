import "../../styles/custom-textarea.css";

export const CustomTextarea = () => {
  return (
    <div className="custom-textarea">
      <label htmlFor="comment">Comentario</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Agrega un comentario"
      ></textarea>
    </div>
  );
};
