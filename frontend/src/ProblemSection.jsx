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
                left: '450px',
                fontWeight: '800',
                fontSize: '45px',
                marginBottom: 10,
                lineHeight: 0,
                color: "#7c4dff",
                letterSpacing: -0.5,
                textShadow: "0 2px 50px #7c4dff",
            }}
        >
        Collaboration & Coordination Overhead
        </div>

        <div
            style={{
              position: 'absolute',
              top: '220px',
              left: '820px',
              width: 80,
              height: 4,
              background: "#7c4dff",
              borderRadius: 2,
              margin: "1.5rem auto",
            }}
        />
<p
  style={{
    position: 'absolute',   
    top: '250px',
    left: '550px',
    fontWeight: '550',       
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
            backgroundColor: 'rgba(90, 88, 166, 0.5)', 
            border: '2px solid #5f62b8',            
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        
        <p
            style={{
                position: 'absolute',
                top: '18%',
                fontSize: '60px',
                marginTop: '10px',
                textAlign: 'center',
                fontWeight: '1000',
            }}
        >
            ~ 20%
            <p
                style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.25',
                }}
            >
                of engineering time <br />
                spent of communication <br />
                overhead <br />
            </p>
        </p>
    </div>

    <div
        style={{
            position: 'absolute',
            top: '500px',
            left: '700px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 88, 166, 0.5)', 
            border: '2px solid #5f62b8',               
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        
        <p
            style={{
                position: 'absolute',
                top: '18%',
                fontSize: '60px',
                marginTop: '10px',
                textAlign: 'center',
                fontWeight: '1000',
            }}
        >
            78%
            <p
                style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.25',
                }}
            >
                teams are cross-functional <br />
                leading to duplicated work<br />
            </p>
        </p>
    </div>

    <div
        style={{
            position: 'absolute',
            top: '500px',
            left: '1100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 88, 166, 0.5)',
            border: '2px solid #5f62b8',               
            color: '#e0e3ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            boxShadow: '0 4px 25px rgba(95, 98, 184, 0.6)',
        }}
        >
        
        <p
            style={{
                position: 'absolute',
                top: '18%',
                fontSize: '50px',
                marginTop: '35px',
                textAlign: 'center',
                fontWeight: '1000',
                lineHeight: '1.15',
            }}
        >
            - $47 Mil
            <p
                style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.25',
                }}
            >
                teams are cross-functional <br />
                leading to duplicated work<br />
            </p>
        </p>
    </div>

<div/>
    </div>
    
  );
}

export default ProblemSection;
