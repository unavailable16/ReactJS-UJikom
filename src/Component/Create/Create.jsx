import React, { useState } from "react";
import { NvAPI } from "../API_handler/NvAPI";
import { AmdAPI } from "../API_handler/AmdAPI";
import { IntelAPI } from "../API_handler/IntelAPI";
import "./Create.css";

const Create = () => {
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [manufacturer, setManufacturer] = useState("nvidia");
  const [cu, setCU] = useState("");
  const [bf, setBF] = useState("");
  const [core, setCore] = useState("");
  const [tu, setTU] = useState("");
  const [tc, setTC] = useState("");
  const [vr, setVR] = useState("");
  const [bw, setBW] = useState("");
  const [pc, setPC] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let api;
      switch (manufacturer) {
        case "nvidia":
          api = NvAPI;
          break;
        case "amd":
          api = AmdAPI;
          break;
        case "intel":
          api = IntelAPI;
          break;
        default:
          throw new Error("Invalid manufacturer");
      }

      await api.post({
        nama,
        image,
        cu,
        bf,
        core,
        tu,
        tc,
        vr,
        bw,
        pc,
      });

      switch (manufacturer) {
        case "nvidia":
          window.location.href = "/nvd";
          break;
        case "amd":
          window.location.href = "/amd";
          break;
        case "intel":
          window.location.href = "/intel";
          break;
        default:
          throw new Error("Invalid manufacturer");
      }
    } catch (error) {
      setError(
        "An error occurred while creating the project. Please try again."
      );
      console.error(error);
    }
  };

  return (
    <div data-aos="fade-left" data-aos-duration="300">
      <h2 style={{ color: "white" }}>Create New GPU Data</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="container-create" onSubmit={handleSubmit}>
        <div>
          <label>Manufacturer:</label>
          <select
            className="shadowed"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="nvidia">Nvidia</option>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input
            className="shadowed"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            className="shadowed"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Compute Unit Count:</label>
          <input
            className="shadowed"
            type="number"
            value={cu}
            onChange={(e) => setCU(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Boost Frequency:</label>
          <input
            className="shadowed"
            type="text"
            value={bf}
            onChange={(e) => setBF(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Core Count:</label>
          <input
            className="shadowed"
            type="number"
            value={core}
            onChange={(e) => setCore(e.target.value)}
            required
          />
        </div>
        <div>
          <label>TMU Count:</label>
          <input
            className="shadowed"
            type="number"
            value={tu}
            onChange={(e) => setTU(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Transistor Count:</label>
          <input
            className="shadowed"
            type="text"
            value={tc}
            onChange={(e) => setTC(e.target.value)}
            required
          />
        </div>
        <div>
          <label>VRAM :</label>
          <input
            className="shadowed"
            type="text"
            value={vr}
            onChange={(e) => setVR(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bus Width:</label>
          <input
            className="shadowed"
            type="text"
            value={bw}
            onChange={(e) => setBW(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bus Interface:</label>
          <input
            className="shadowed"
            type="text"
            value={pc}
            onChange={(e) => setPC(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="rounded primary shadowed">
          Submit
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded secondary shadowed"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Create;
