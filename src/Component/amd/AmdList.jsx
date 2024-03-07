import React, { useState } from "react";
import AmdCard from "./AmdCard";
import AmdForm from "./AmdForm";

const NvList = ({ Gpuamd, onSave, onDelete }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (amd) => {
    setProjectBeingEdited(amd);
  };

  const handleDelete = (amd) => {
    onDelete(amd);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {Gpuamd.map((amd) => (
        <div key={amd.id} className="col-row">
          {" "}
          {/* Added key and corrected class name */}
          {amd === projectBeingEdited ? (
            <AmdForm onSave={onSave} onCancel={cancelEditing} amd={amd} />
          ) : (
            <AmdCard amd={amd} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NvList;
