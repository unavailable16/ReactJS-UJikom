import React, { useEffect, useState } from "react";
import IntelList from "./IntelList";
import { IntelAPI } from "../API_handler/IntelAPI";
import Project from "../Project";
import "../List.css";
import "./intel.css";

const IntelPages = () => {
  const [Gpuintel, setProjects] = useState([]);
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
        const data = await IntelAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((Gpuintel) => [...Gpuintel, ...data]);
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

  const sortByVram = () => {
    const sortedProjects = [...Gpuintel].sort((a, b) => {
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
  

  const saveProject = (intel) => {
    IntelAPI.put(intel)
      .then((updatedProject) => {
        let updatedProjects = Gpuintel.map((p) =>
          p.id === intel.id ? new Project(updatedProject) : p
        );
        setProjects(updatedProjects);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  };

  const deleteProject = (id) => {
    IntelAPI.delete(id)
      .then(() => {
        setProjects(Gpuintel.filter((project) => project.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts or page is refreshed
  }, []);

  useEffect(() => {
    const bodyClassName = document.body.className;
    console.log('Body class:', bodyClassName);
}, []);

  return (
    <div>
      <div className="Intel"/>

      <div className="containerintel">
        <h1
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          Intel ARC GPU's
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
        <IntelList
        className="intel-form"
          onSave={saveProject}
          onDelete={deleteProject}
          Gpuintel={Gpuintel}
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
            <span className="spinner primary"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntelPages;
