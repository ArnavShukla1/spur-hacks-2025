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
                fontSize: 40,
                marginBottom: 50,
                lineHeight: 0,
                color: "#bfcfff",
                letterSpacing: -0.5,
                textShadow: "0 2px 50px #bfcfff",
            }}
        >
        Collaboration & Coordination Overhead
        </div>
      <p>
        How many times have you struggled to read somebody else's code <br /> 
        and parse through a series of indecipherable syntax? The reality for <br />
        countless developers is that they spend a disproportionate amount <br />
        trying 
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
