import React, { useState } from "react";
import "./ResourceLibrary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import TruncateText from "../TruncateText";
import ResourceLibraryProfile from "./ResourceLibraryProfile";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SecFooter from "../SecFooter";
export default function ResourceLibrary() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [projectNameError, setProjectNameError] = useState("");
  const [projectDescError, setProjectDescError] = useState("");
  const [projectLinksError, setProjectLinksError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projecttagsError, setProjecttagsError] = useState("");
  const rowsPerPageOptions = [5, 10, 15];
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([
    {
      // id: 1,
      name: "kjbvshjvb",
      projectdesc: "kkjjbakcj  dnsvnjdvsvbdvbdsvbsjvbjd",
      projectlinksInputs:
        "https://github.com/HARSHDUDHAT07/AWT_ASSIGNMENTS/blob/main/task1.html",
      projecttags: ["hubhacd", "jhvbdvh"],
    },
    {
      // id: 2,
      name: "n dvjvbvjsv",
      projectdesc: "svdsvjsvdbjd vdjsvbdvbkjbkjb",
      projectlinksInputs:
        "https://github.com/HARSHDUDHAT07/AWT_ASSIGNMENTS/blob/main/task1.html",
      projecttags: ["knbhjv", "jvbsjh"],
    },
    {
      // id: 3,
      name: "jhsvbdsjvbjdbvjv",
      projectdesc: "svjbsvhjbjdsvbsvbhjb",
      projectlinksInputs:
        "https://github.com/HARSHDUDHAT07/AWT_ASSIGNMENTS/blob/main/task1.html",
      projecttags: [],
    },
  ]);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const prev = <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>;
  const next = (
    <i className="fa-solid fa-greater-than" style={{ paddingLeft: "8px" }}></i>
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleDelete = (projectId) => {
    // Implement logic to delete a project based on its ID
    const updatedProjects = projects.filter(
      (project) => project.name !== projectId
    );
    setProjects(updatedProjects);
  };
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / rowsPerPage);
  const indexOfLastProject = currentPage * rowsPerPage;
  const indexOfFirstProject = indexOfLastProject - rowsPerPage;

  const handleSort = () => {
    const sortedProjects = [...projects].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    setProjects(sortedProjects);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const githubLinkPattern = /github\.com/i;
    const dockerLinkPattern = /docker\.com/i;
    const projectLinks = (projects.projectlinksInputs || "")
      .split(",")
      .map((link) => link.trim());

    const areLinksValid = projectLinks.every((link) => {
      return githubLinkPattern.test(link) || dockerLinkPattern.test(link);
    });

    if (
      !areLinksValid ||
      !projects.projectname ||
      !projects.projectdesc ||
      !projects.projectlinksInputs ||
      !projects.projecttags
    ) {
      // Set error messages for the respective input fields
      // if (!projects.projectname) {
      //   setProjectNameError("Project Name is required.")
      // }
      // if (!projects.projectdesc) {
      //   setProjectDescError("Project Description is required.")
      // }
      // if (!projects.projectlinksInputs) {
      //   setProjectLinksError("Project Links are required.")
      // }
      // if (!projects.projecttags) {
      //   setProjecttagsError("Project tags are required.")
      // }
      setIsModalOpen(false); // Add this line to close the modal

      // Prevent form submission
      return;
    }

    // Continue with form submission or other actions
    console.log(
      "Form submitted with valid links and all required fields:",
      projects
    );

    // If you want to reset the form fields after submission, you can do so by setting the project state to an empty object or initializing a new project object.
    setProjects({
      projectname: "",
      projectdesc: "",
      projectlinksInputs: "",
      projecttags: "",
    });

    // Close the modal (if you want)
    // Add code to close the modal here if needed
  };

  // Close the modal (if you want)
  // Add code to close the modal here if needed

  const handleTextInputChange = (identifier, event) => {
    // Ensure that the event object is properly passed
    if (event && event.target) {
      const updatedProjects = [...projects]; // Create a copy of the projects array
      const index = 0; // Replace with the appropriate index

      // Clear previous error messages when input changes
      setProjectNameError("");
      setProjectDescError("");
      setProjectLinksError("");
      setProjecttagsError("");

      // Update the corresponding field based on the identifier and index
      if (identifier === "projectname") {
        updatedProjects[index].name = event.target.value;
      } else if (identifier === "projectdesc") {
        updatedProjects[index].projectdesc = event.target.value;
      } else if (identifier === "projectlinksInputs") {
        updatedProjects[index].projectlinksInputs = event.target.value;
      } else if (identifier === "projecttags") {
        updatedProjects[index].projecttags = event.target.value;
      }

      // Update the state with the modified projects array
      setProjects(updatedProjects);
    }
  };
  const currentProjects =
    projects && projects.length > 0
      ? projects.slice(indexOfFirstProject, indexOfLastProject)
      : [];

  const hasDockerLink = projects.some((project) =>
    project.projectlinksInputs.includes("docker")
  );

  const hasGithubLink = projects.some((project) =>
    project.projectlinksInputs.includes("github")
  );

  return (
    <>
      <Navbar />
      <div className="resourceLibrarypg">
        <div className="past-projects">
          <p className="past-projects-title">Directory of Projects</p>
          {/* <p className="past-projects-text">
          Projects are listed in reverse chronological order by date.
        </p> */}
          <table className="project-table">
            <thead>
              <tr>
                <th>
                  <span onClick={handleSort}>
                    Project Name
                    {sortOrder === "asc" ? " ↓" : " ↑"}
                  </span>
                </th>
                <th>Project Discription</th>
                <th>Github/Docker Link</th>
                <th>Tags</th>
                <th>See More</th>
                <th>Add/Delete Project</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((projects) => (
                <tr key={projects.name}>
                  <td>{projects.name}</td>
                  <td className="projectdesc">
                    <TruncateText
                      text={projects.projectdesc}
                      maxChars={20}
                    ></TruncateText>
                  </td>
                  <td className="github-docker-icons">
                    {hasDockerLink && (
                      <FontAwesomeIcon icon={faDocker} className="docker" />
                    )}
                    {hasGithubLink && (
                      <FontAwesomeIcon icon={faGithub} className="github" />
                    )}
                  </td>
                  <td className="tags-cell">
                    {/* Add margin or padding to the tags */}
                    {projects.projecttags &&
                      projects.projecttags.map((projecttags, index) => (
                        <span key={index} className="tag-cell-span">
                          {projecttags}
                        </span>
                      ))}
                  </td>
                  <td className="see-more-cell">
                    <a href={`/projects/${projects.name}`}>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="eye"
                      ></FontAwesomeIcon>
                    </a>
                  </td>
                  <td className="delete-project-buttons">
                    <div className="deleteprojectbutton">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(projects.name)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colSpan="10"
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "none",
                  }}
                >
                  <div className="pagination">
                    {/* Number of rows per page select */}
                    <div className="pagination-con">
                      <label className="rpp" htmlFor="rowsPerPage">
                        Rows per page:
                      </label>
                      <select
                        className="rppdd"
                        id="rowsPerPage"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                      >
                        {rowsPerPageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      {/* Number of pages */}
                      <button
                        className="page-btn"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        {prev}
                      </button>
                      <p style={{ fontSize: "13px", paddingTop: "5px" }}>
                        Page {currentPage} of {totalPages}
                      </p>
                      {/* Pagination controls */}

                      <button
                        className="page-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        {next}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="add-project-button">
            <div className="addpeojectfromhere">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setIsModalOpen(true)}
              >
                Add Project
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Add Project
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="project-name"
                          className="col-form-label"
                        >
                          Project Name
                        </label>
                        <input
                          type="text"
                          className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                          id="project-name"
                          name="projectname"
                          value={projects.projectname}
                          onChange={(e) =>
                            handleTextInputChange("projectname", e)
                          }
                          required
                        />
                        {projectNameError && (
                          <div className="error-message">
                            {projectNameError}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="projectdesc-text"
                          className="col-form-label"
                        >
                          Project Description
                        </label>
                        <textarea
                          className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                          id="projectdesc-text"
                          name="projectdesc"
                          value={projects.projectdesc}
                          onChange={(e) =>
                            handleTextInputChange("projectdesc", e)
                          }
                          required
                        ></textarea>
                        {projectDescError && (
                          <div className="error-message">
                            {projectDescError}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="project-taas"
                          className="col-form-label"
                        >
                          Project Tags
                        </label>
                        <input
                          type="text"
                          className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                          id="project-tags"
                          name="projecttags"
                          value={projects.projecttags}
                          onChange={(e) =>
                            handleTextInputChange("projecttags", e)
                          }
                          required
                        />
                        {projecttagsError && (
                          <div className="error-message">
                            {projecttagsError}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="projectlinks"
                          className="col-form-label"
                        >
                          Project Link
                        </label>
                        <div className="projectlinksInput">
                          <input
                            type="text"
                            id="projectlinksInputs"
                            name="projectlinksInputs"
                            value={projects.projectlinksInputs}
                            className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                            onChange={(e) =>
                              handleTextInputChange("projectlinksInputs", e)
                            }
                            required
                          />
                          {projectLinksError && (
                            <div className="error-message">
                              {projectLinksError}
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
             <SecFooter/>
              <Footer/>
        </div>
      </div>
    </>
  );
}
