import React from "react";
import "../detail.css";

const NvDetail = (props) => {
  const { nvidia } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <div id="pagecard1">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="200"
              src={nvidia.image}
              alt={nvidia.nama}
              className="rounded"
            />
          </div>
          <section className="section-dark">
            <h2
              data-aos="fade-right"
              data-aos-duration="200"
              className="strong"
            >
              <strong>{nvidia.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p>Compute Unit Count : {nvidia.cu}</p>
              <p>Core Boost Frequency : {nvidia.bf}</p>
              <p>Core Count : {nvidia.core}</p>
              <p>TMU Count : {nvidia.tu}</p>
              <p>Transistor Count : {nvidia.tc}</p>
              <p>VRAM "Video Ram": {nvidia.vr}</p>
              <p>Bus Width : {nvidia.bw}</p>
              <p>Bus Interface : {nvidia.pc}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NvDetail;
