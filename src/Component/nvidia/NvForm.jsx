import React, { useState } from "react";
import Project from "../Project";
import "./nvidia.css"

const NvForm = ({ nvidia: initialProject, onSave, onCancel }) => {
  const [nvidia, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    nama: "",
    cu: "",
    bf: "",
    core: "",
    tu: "",
    tc: "",
    vr: "",
    bw: "",
    pc: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(nvidia);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setProject((p) => new Project({ ...p, [name]: updatedValue }));
    setErrors(validate({ ...nvidia, [name]: updatedValue }));
  };

  const validate = (values) => {
    let newErrors = {};
    // Define your validation rules here
    if (values.nama.trim() === "") {
      newErrors.nama = "Name is required";
    } else if (values.nama.length < 3) {
      newErrors.nama = "Name needs to be more than 3 characters";
    }

    // Add similar validation rules for other fields

    return newErrors;
  };

  const isValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="nama"> Gpu Name </label>
      <input
        type="text"
        name="nama"
        placeholder="Enter Name"
        value={nvidia.nama}
        onChange={handleChange}
      />
      <span className="error">{errors.nama}</span>

      <label htmlFor="bf"> Core Clock </label>
      <input
        type="text"
        name="bf"
        placeholder="Enter Clock Speed Amount"
        value={nvidia.bf}
        onChange={handleChange}
      />
      <span className="error">{errors.bf}</span>

      <label htmlFor="tc"> Transistor Count </label>
      <input
        type="text"
        name="tc"
        placeholder="Enter Transistor Count"
        value={nvidia.tc}
        onChange={handleChange}
      />
      <span className="error">{errors.tc}</span>

      <label htmlFor="vr"> Video Ram </label>
      <input
        type="text"
        name="vr"
        placeholder="Enter Vram Amount"
        value={nvidia.vr}
        onChange={handleChange}
      />
      <span className="error">{errors.vr}</span>

      <label htmlFor="bw"> Bus Width </label>
      <input
        type="text"
        name="bw"
        placeholder="Enter Bus Width"
        value={nvidia.bw}
        onChange={handleChange}
      />
      <span className="error">{errors.bw}</span>

      <label htmlFor="pc"> Bus Interface </label>
      <input
        type="text"
        name="pc"
        placeholder="Enter Bus Interface Version"
        value={nvidia.pc}
        onChange={handleChange}
      />
      <span className="error">{errors.pc}</span>

      <label htmlFor="cu"> Compute Unit</label>
      <input
        type="number"
        name="cu"
        placeholder="Enter Compute Unit Amount"
        value={nvidia.cu}
        onChange={handleChange}
      />
      <span className="error">{errors.cu}</span>

      <label htmlFor="core"> Core Count</label>
      <input
        type="number"
        name="core"
        placeholder="Enter Core Count"
        value={nvidia.core}
        onChange={handleChange}
      />
      <span className="error">{errors.core}</span>

      <label htmlFor="tu"> TMU</label>
      <input
        type="number"
        name="tu"
        placeholder="Enter TMUS"
        value={nvidia.tu}
        onChange={handleChange}
      />
      <span className="error">{errors.tu}</span>

      {/* Add similar blocks for other form inputs */}

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NvForm;
