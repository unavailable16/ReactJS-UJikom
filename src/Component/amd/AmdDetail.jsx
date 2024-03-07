import React from "react";
import "../detail.css";

const AmdDetail = (props) => {
  const { amd } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <div id="pagecard1">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="200"
              src={amd.image}
              alt={amd.nama}
              className="rounded"
            />
          </div>
          <section className="section-dark">
            <h2
              data-aos="fade-right"
              data-aos-duration="200"
              className="strong"
            >
              <strong>{amd.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p>Compute Unit Count : {amd.cu}</p>
              <p>Core Boost Frequency : {amd.bf}</p>
              <p>Core Count : {amd.core}</p>
              <p>TMU Count : {amd.tu}</p>
              <p>Transistor Count : {amd.tc}</p>
              <p>VRAM "Video Ram": {amd.vr}</p>
              <p>Bus Width : {amd.bw}</p>
              <p>Bus Interface : {amd.pc}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AmdDetail;
