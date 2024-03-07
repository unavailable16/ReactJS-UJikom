import React from "react";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { useLogin } from "../LoginContext";
import "../List.css";

const AmdCard = (props) => {
  const { amd, onEdit, onDelete } = props;
  const {tipe} = useLogin();

  const handleEditClick = (amdBeingEdited) => {
    onEdit(amdBeingEdited);
  };

  const handleDeleteClick = (amd) => {
    onDelete(amd.id);
  };

  return (
    <div data-aos="flip-left" data-aos-duration="350" className="whole">
      <div className="card" id="pagecard">
        <img className="img" src={amd.image} alt={amd.nama} />
      </div>
      <section className="section">
        <Link className="kard" to={"/amd/" + amd.id}>
          <h3 className="strong">
            <strong>{amd.nama}</strong>
          </h3>
          <p>Core Clock Speed: {amd.bf}</p>
          <p>Vram: {amd.vr}</p>
          <p>Bus Width: {amd.bw}</p>
        </Link>
        {tipe === "admin" && (
        <div className="buttongroup">
          <button
            className="bordered primary"
            onClick={() => handleEditClick(amd)}
          >
            <span className="icon-edit inverse"></span>
            Edit
          </button>
          <button
            className="bordered secondary"
            onClick={() => handleDeleteClick(amd)}
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

export default AmdCard;
