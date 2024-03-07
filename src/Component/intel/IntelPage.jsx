import React, { useEffect, useState } from "react";
import { IntelAPI } from "../API_handler/IntelAPI";
import { useParams } from "react-router-dom";
import IntelDetail from "./IntelDetail";
import "./intel.css";

const IntelPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [intel, setProject] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    IntelAPI.find(id)
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
    <div className="Intel"/>
    <div className="Intel1">
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
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
      <div className="containerintel1">
        <h1
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          Specification Detail
        </h1>
        {intel && <IntelDetail intel={intel} />}
      </div>
    </div>
    </>
  );
};

export default IntelPage;
