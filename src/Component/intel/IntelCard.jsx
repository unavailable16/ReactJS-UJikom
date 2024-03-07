import React from "react";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { useLogin } from "../LoginContext";
import "../List.css";

const IntelCard = (props) => {
  const { intel, onEdit, onDelete } = props;
  const {tipe} = useLogin();

  const handleEditClick = (intelBeingEdited) => {
    onEdit(intelBeingEdited);
  };

  const handleDeleteClick = (intel) => {
    onDelete(intel.id);
  };

  return (
    <div data-aos="flip-left" data-aos-duration="350" className="whole">
      <div className="card" id="pagecard">
        <img className="img" src={intel.image} alt={intel.nama} />
      </div>
      <section className="section">
        <Link className="kard" to={"/intel/" + intel.id}>
          <h3 className="strong">
            <strong>{intel.nama}</strong>
          </h3>
          <p>Core Clock Speed: {intel.bf}</p>
          <p>Vram: {intel.vr}</p>
          <p>Bus Width: {intel.bw}</p>
        </Link>
        {tipe === "admin" && (
        <div className="buttongroup">
          <button
            className="bordered primary"
            onClick={() => handleEditClick(intel)}
          >
            <span className="icon-edit inverse"></span>
            Edit
          </button>
          <button
            className="bordered secondary"
            onClick={() => handleDeleteClick(intel)}
          >
            <GoTrash />
            Delete
          </button>
        </div>
        )}
      </section>
    </div>
  );
};

export default IntelCard;
