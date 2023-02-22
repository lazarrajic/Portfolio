import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Dashboard.css";
import CV from "../../Files/LazarRajic.pdf";

const Dashboard = () => {
  function handleButtonClick() {
    window.open(CV, "_blank");
    console.log("clicked");
  }

  const [showModal, setShowModal] = useState(false);

  function handleModalClick() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const Modal = ({ onClose }) => (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h4>About Me</h4>
        <p>Im Cool!</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="dashboardTitle">
        {/* PORTFOLIO */}
        <svg viewBox="0 0 1320 250">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            PORTFOLIO
          </text>
        </svg>
        <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Button label="View CV" onClick={handleButtonClick} />
          <Button label="About Me" onClick={handleModalClick} />
          {showModal && <Modal onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
