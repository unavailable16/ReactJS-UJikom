import React, { useEffect, useState } from "react";
import { AmdAPI } from "../API_handler/AmdAPI";
import { useParams } from "react-router-dom";
import AmdDetail from "./AmdDetail";

const AmdPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [amd, setProject] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    AmdAPI.find(id)
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
    <div className="amd"/>
    <div className="amd-container">
      {loading && (
        <div className="center-page">
          <span className="spinner secondary"></span>
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
      <div className="containeramd1">
        <h1
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          Specification Detail
        </h1>
        {amd && <AmdDetail amd={amd} />}
      </div>
    </div>
    </>
  );
};

export default AmdPage;
