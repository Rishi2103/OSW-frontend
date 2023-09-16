import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SecFooter from "../SecFooter";
import "./User.css";

const User = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [events, setEvents] = useState([
    { id: 1, name: "User 1", date: "2021-12-20", venue: "Online" },
    { id: 2, name: "User 2", date: "2021-10-23", venue: "ssdfs" },
    { id: 3, name: "User 3", date: "2021-10-23", venue: "ssdfs" },
    { id: 4, name: "User 4", date: "2021-10-23", venue: "ssdfs" },
    { id: 5, name: "User 5", date: "2021-10-23", venue: "ssdfs" },
    { id: 6, name: "User 6", date: "2021-10-23", venue: "ssdfs" },
  ]);

  const rowsPerPageOptions = [5, 10, 15]; // Customize the rows per page options as needed
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };
  const prev = <i className="fa-solid fa-less-than"></i>;
  const next = (
    <i className="fa-solid fa-greater-than" style={{ paddingLeft: "8px" }}></i>
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination calculation
  const totalEvents = events.length;
  const totalPages = Math.ceil(totalEvents / rowsPerPage);
  const indexOfLastEvent = currentPage * rowsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - rowsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleSort = () => {
    const sortedEvents = [...events].sort((a, b) => {
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

    setEvents(sortedEvents);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="eventpg">
      <Navbar />
      <div className="eventpg-intro">
        {/* <div className='eventpg-con'>
        <b><p className="eventpg-head">Our <span style={{ color: '#0E8388' }}>Events</span></p></b>
        <p className='eventpg-text'>Questions? Please contact <span style={{ color: '#0E8388' }}>connectwithaurapp@gmail.com</span></p>
        </div> */}
      </div>
      <div className="past-events">
        <p className="past-events-title">User List</p>
        <table className="event-table">
          <thead>
            <tr>
              <th>
                <span onClick={handleSort}>
                  User Name
                  {sortOrder === "asc" ? " ↓" : " ↑"}
                </span>
              </th>
              <th>Date</th>
              <th>Venue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>
                  {/* Add your "See More" link or button here */}
                  {/* Add your "See More" link or button here */}
                  <a href={`/events/${event.id}`}>
                    <i class="fa-solid fa-eye table-icon"></i>
                    <i class="fa-solid fa-pen-to-square table-icon"></i>
                    <i class="fa-solid fa-trash-can table-icon"></i>
                  </a>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="4">
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
      </div>
      <Footer />
      <SecFooter />
    </div>
  );
};

export default User;
