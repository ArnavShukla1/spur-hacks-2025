import React from "react";

function ProblemSection({ darkMode }) {
    return (
    <div className={darkMode ? "solution-section dark" : "solution-section"}>
        <div
            style={{
                fontWeight: 800,
                fontSize: 26,
                marginBottom: 10,
                lineHeight: 2.5,
                color: "#bdbdbd",
                letterSpacing: -0.5,
                textShadow: "0 2px 8px #0006",
            }}
        >
        The Hidden Costs of 
        </div>
        <div
            style={{
                fontWeight: 800,
                fontSize: 30,
                marginBottom: 10,
                lineHeight: 0,
                color: "#bfcfff",
                letterSpacing: -0.5,
                textShadow: "0 2px 8px #0006",
            }}
        >
        Collaboration and Coordination Overhead
        </div>
      <p>
        We provide an innovative solution to help you manage your tasks
        efficiently.
      </p>
      <ul>
        <li>Feature 1: Task Management</li>
        <li>Feature 2: Time Tracking</li>
        <li>Feature 3: Reporting</li>
      </ul>
      <button>Get Started</button>
    </div>
    
  );
}

export default ProblemSection;
