import React, { useState } from "react";
import NvCard from "./NvCard";
import NvForm from "./NvForm";

const NvList = ({ Gpunvidia, onSave, onDelete }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (nvidia) => {
    setProjectBeingEdited(nvidia);
  };

  const handleDelete = (nvidia) => {
    onDelete(nvidia);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {Gpunvidia.map((nvidia) => (
        <div key={nvidia.id} className="col-row">
          {nvidia === projectBeingEdited ? (
            <NvForm onSave={onSave} onCancel={cancelEditing} nvidia={nvidia} />
          ) : (
            <NvCard
              nvidia={nvidia}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NvList;
