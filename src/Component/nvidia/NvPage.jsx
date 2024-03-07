import React, { useEffect, useState } from "react";
import { NvAPI } from "../API_handler/NvAPI";
import { useParams } from "react-router-dom";
import NvDetail from "./NvDetail";

const NvPage = () => {
  const [loading, setLoading] = useState(false);
  const [nvidia, setProject] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    NvAPI.find(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
    <div className="nv"/>
    <div className="nv-container">
      {loading && (
        <div className="center-page">
          <span className="spinner tertiary"></span>
        </div>
      )}

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <div className="containernv1">
        <h1
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          Specification Detail
        </h1>
        {nvidia && <NvDetail nvidia={nvidia} />}
      </div>
    </div>
    </>
  );
};

export default NvPage;
