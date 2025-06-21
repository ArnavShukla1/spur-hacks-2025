import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProblemSection from "./ProblemSection";
import HowItWorksSection from "./HowItWorksSection";
import EnterpriseSection from "./EnterpriseSection";
import SolutionSection from "./SolutionSection";
import "./App.css";

function App() {
  // State: whether dark mode is active (false/true, default true)
  const [darkMode, setDarkMode] = useState(true);
  // State: which tab is active ("home", "enterprise", "how", "solution", "problem", default "home")
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const pathToTab = (pathname) => {
      if (pathname === "/enterprise") return "enterprise";
      if (pathname === "/how-it-works") return "how";
      if (pathname === "/solution") return "solution";
      if (pathname === "/problem") return "problem";
      return "home";
    };
    setActiveTab(pathToTab(window.location.pathname));
    const onPopState = () => {
      setActiveTab(pathToTab(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <>
      {/*Navigation bar*/}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {/*Display the page corresponding to the active tab*/}
      {activeTab === "how" ? (
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            background: darkMode ? "#000" : "#fff",
            paddingTop: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <HowItWorksSection darkMode={darkMode} />
        </div>
      ) : activeTab === "problem" ? (
        <ProblemSection darkMode={darkMode} />
      ) : activeTab === "enterprise" ? (
        <EnterpriseSection darkMode={darkMode} />
      ) : activeTab === "solution" ? (
        <SolutionSection darkMode={darkMode} />
      ) : (
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            background: darkMode ? "#000" : "#f5f7fa",
            color: darkMode ? "#fff" : "#222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          <div
            style={{
              letterSpacing: "0.2em",
              color: darkMode ? "#b39ddb" : "#7c4dff",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            THE WORLD'S FIRST
          </div>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              color: darkMode ? "#c7aaff" : "#7c4dff",
              margin: 0,
            }}
          >
            Org-Wide Brain
          </h1>
          <div
            style={{
              width: 80,
              height: 4,
              background: darkMode ? "#b39ddb" : "#7c4dff",
              borderRadius: 2,
              margin: "1.5rem auto",
            }}
          />
          <div
            style={{
              fontSize: "1.5rem",
              color: darkMode ? "#bdbdbd" : "#444",
              textAlign: "center",
              maxWidth: 700,
              marginBottom: "2.5rem",
            }}
          >
            Turn scattered knowledge into{" "}
            <span
              style={{ color: darkMode ? "#fff" : "#222", fontWeight: 600 }}
            >
              AI-powered insights
            </span>{" "}
            for intelligent teams.
          </div>
          <button
            style={{
              background: darkMode ? "#b39ddb" : "#7c4dff",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.2rem",
              border: "none",
              borderRadius: 10,
              padding: "0.75rem 2.5rem",
              boxShadow: darkMode
                ? "0 4px 24px #b39ddb55"
                : "0 4px 24px #7c4dff55",
              cursor: "pointer",
              marginRight: 16,
              transition: "background 0.3s",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
}

export default App;
