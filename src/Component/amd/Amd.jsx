import React, { useEffect, useState } from "react";
import AmdList from "./AmdList";
import { AmdAPI } from "../API_handler/AmdAPI";
import Project from "../Project";
import "./amd.css";

const AmdPages = () => {
  const [Gpuamd, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByVramAsc, setSortByVramAsc] = useState(true); // Track sorting order

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await AmdAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((Gpuamd) => [...Gpuamd, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [currentPage]);

  const saveProject = (amd) => {
    AmdAPI.put(amd)
      .then((updatedProject) => {
        let updatedProjects = Gpuamd.map((p) => {
          return p.id === amd.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  };

  const deleteProject = (id) => {
    AmdAPI.delete(id)
      .then(() => {
        setProjects(Gpuamd.filter((project) => project.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const sortByVram = () => {
    const sortedProjects = [...Gpuamd].sort((a, b) => {
      // Parse VRAM values from strings and compare
      const vramA = parseInt(a.vr);
      const vramB = parseInt(b.vr);
      if (sortByVramAsc) {
        return vramA - vramB; // Ascending order
      } else {
        return vramB - vramA; // Descending order
      }
    });
    setProjects(sortedProjects);
    setSortByVramAsc(!sortByVramAsc); // Toggle sorting order
  };
  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts or page is refreshed
  }, []);

  useEffect(() => {
    const bodyClassName = document.body.className;
    console.log("Body class:", bodyClassName);
  }, []);

  return (
    <div>
      <div className="amd" />

      <div className="containeramd">
        <h1
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          AMD Radeon GPU's
        </h1>
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
        <div className="sort-dropdown">
          <label style={{ color: "white" }} >Vram Sort :</label>
          <select
            value={sortByVramAsc ? "lowToHigh" : "highToLow"}
            onChange={sortByVram}
            style={{ border: "none" }}
            className="form-control"
            required
          >
            <option value="lowToHigh">Up</option>
            <option value="highToLow">Down</option>
          </select>
        </div>
        <AmdList
          className="amd-form"
          onSave={saveProject}
          onDelete={deleteProject}
          Gpuamd={Gpuamd}
        />

        {!loading && !error && (
          <div className="row">
            <div className="col-sm-12">
              <div className="button-group fluid">
                <button className="button default" onClick={handleMoreClick}>
                  More...
                </button>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="center-page">
            <span className="spinner secondary"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmdPages;
