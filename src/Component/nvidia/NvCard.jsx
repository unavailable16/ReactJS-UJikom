import React from "react";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { useLogin } from "../LoginContext";
import "../List.css";

const NvCard = (props) => {
  const {tipe} = useLogin(); // Destructure tipe from useLogin context
  const { nvidia, onEdit, onDelete } = props;

  const handleEditClick = (nvidiaBeingEdited) => {
    onEdit(nvidiaBeingEdited);
  };

  const handleDeleteClick = (nvidia) => {
    onDelete(nvidia.id);
  };

  return (
    <div data-aos="flip-left" data-aos-duration="350" className="whole">
      <div className="card" id="pagecard">
        <img className="img" src={nvidia.image} alt={nvidia.nama} />
      </div>
      <section className="section">
        <Link className="kard" to={"/nvidia/" + nvidia.id}>
          <h3 className="strong">
            <strong>{nvidia.nama}</strong>
          </h3>
          <p>Core Clock Speed: {nvidia.bf}</p>
          <p>Vram: {nvidia.vr}</p>
          <p>Bus Width: {nvidia.bw}</p>
        </Link>
        {tipe === "admin" && (
        <div className="buttongroup">
          <button
            className="bordered primary"
            onClick={() => handleEditClick(nvidia)}
          >
            <span className="icon-edit inverse"></span>
            Edit
          </button>
          <button
            className="bordered secondary"
            onClick={() => handleDeleteClick(nvidia)}
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

export default NvCard;
