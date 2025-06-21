import React from "react";

function HowItWorksSection({ darkMode }) {
  return (
    <div className={`how-it-works-section ${darkMode ? "dark" : "light"}`}>
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Connect your wallet</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Choose a plan</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Start your journey</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
