import React, { useState } from "react";
import IntelCard from "./IntelCard";
import IntelForm from "./IntelForm";

const IntelList = ({ Gpuintel, onSave, onDelete }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (intel) => {
    setProjectBeingEdited(intel);
  };
  const handleDelete = (intel) => {
    onDelete(intel);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {Gpuintel.map((intel) => (
        <div key={intel.id} className="col-row">
          {intel === projectBeingEdited ? (
            <IntelForm onSave={onSave} onCancel={cancelEditing} intel={intel} />
          ) : (
            <IntelCard
              intel={intel}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default IntelList;
