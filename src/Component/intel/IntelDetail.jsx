import React from "react";
import "../detail.css";

const IntelDetail = (props) => {
  const { intel } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <div id="pagecard1">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="200"
              src={intel.image}
              alt={intel.nama}
              className="rounded"
            />
          </div>
          <section className="section-dark">
            <h2
              data-aos="fade-right"
              data-aos-duration="200"
              className="strong"
            >
              <strong>{intel.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p>Compute Unit Count : {intel.cu}</p>
              <p>Core Boost Frequency : {intel.bf}</p>
              <p>Core Count : {intel.core}</p>
              <p>TMU Count : {intel.tu}</p>
              <p>Transistor Count : {intel.tc}</p>
              <p>VRAM "Video Ram": {intel.vr}</p>
              <p>Bus Width : {intel.bw}</p>
              <p>Bus Interface : {intel.pc}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntelDetail;
