import React from "react";

function ProblemSection({ darkMode }) {
    return (
    <div className={darkMode ? "solution-section dark" : "solution-section"}>
        <div
            style={{
                position: 'absolute',
                top: '120px',
                left: '735px',
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
                position: 'absolute',
                top: '200px',
                left: '500px',
                fontWeight: 800,
                fontSize: 40,
                marginBottom: 10,
                lineHeight: 0,
                color: "#bfcfff",
                letterSpacing: -0.5,
                textShadow: "0 2px 50px #bfcfff",
            }}
        >
        Collaboration & Coordination Overhead
        </div>
<p
  style={{
    position: 'absolute',     // or 'absolute', depending on layout
    top: '250px',
    left: '550px',
    fontWeight: '600',       // or a number like 500, 600, 700
  }}
  > How many times have you struggled to read somebody else's code and parse through <br /> 
    a series of indecipherable syntax? The reality for countless developers is that <br />
    they spend a disproportionate amount of time trying to understaand their <br />
    collaborators' code or keep up with the latest changes in a project, unneccessarily <br />
    reducing productivity and reducing team coordination. <br />
    <br />
    <br />
</p>

    
    <div
        style={{
            position: 'absolute',
            top: '500px',
            left: '300px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 88, 166, 0.5)', // semi-transparent background
            border: '2px solid #5f62b8',               // solid border
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        A
    </div>

    <div
        style={{
            position: 'absolute',
            top: '500px',
            left: '700px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 88, 166, 0.5)', // semi-transparent background
            border: '2px solid #5f62b8',               // solid border
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        A
    </div>

    <div
        style={{
            position: 'absolute',
            top: '500px',
            left: '1100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 88, 166, 0.5)', // semi-transparent background
            border: '2px solid #5f62b8',               // solid border
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        A
    </div>

<div/>
      <button
      style={{
        position: 'absolute',
        top: '420px',
        left: '758px',
        height: '50px',
        width: '200px',
      }}
      >Get Started</button>
    </div>
    
  );
}

export default ProblemSection;
