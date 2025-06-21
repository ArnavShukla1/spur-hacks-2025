import React from "react";

function SolutionSection({ darkMode }) {
  return (
    <div className={darkMode ? "solution-section dark" : "solution-section"}>
      <h2>Our Solution</h2>
      <p>
        We provide an innovative solution to help you manage your tasks
        efficiently.
      </p>
      <ul>
        <li>Feature 1: Task Management</li>
        <li>Feature 2: Time Tracking</li>
        <li>Feature 3: Reporting</li>
      </ul>

      <button onClick={() => (window.location.href = "/how-it-works")}>
        Get Started
      </button>

    </div>
  );
}

export default SolutionSection;
