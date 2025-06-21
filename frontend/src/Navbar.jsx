import React from "react";

function Navbar({ darkMode, setDarkMode, setActiveTab, activeTab }) {
  // Helper to update tab and URL
  const handleTabClick = (tab, url) => {
    setActiveTab(tab);
    window.history.pushState({}, "", url);
  };
  return (
    <nav
      style={{
        width: "100vw",
        background: darkMode ? "#070c16" : "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 2.5rem",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        boxSizing: "border-box",
        transition: "background 0.3s",
      }}
    >
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <button
          style={{
            color: darkMode ? "#fff" : "#222",
            background:
              activeTab === "features"
                ? darkMode
                  ? "#070c16"
                  : "#f5f7fa"
                : "none",
            border:
              activeTab === "features"
                ? "3px solid #bfcfff"
                : `1.5px solid ${darkMode ? "#bfcfff" : "#222"}`,
            borderRadius: 16,
            padding: "0.3rem 1.2rem",
            fontSize: "1.1rem",
            fontWeight: 500,
            marginRight: 8,
            outline: "none",
            boxShadow:
              activeTab === "features"
                ? "0 0 0 3px #bfcfff"
                : darkMode
                ? "0 0 0 2px #bfcfff"
                : "0 0 0 2px #222",
            transition: "all 0.2s",
          }}
          onClick={() => handleTabClick("features", "/")}
        >
          Features
        </button>
        <span
          style={{
            color: darkMode ? "#bfcfff" : "#222",
            fontSize: "1.1rem",
            fontWeight: 400,
            marginRight: 8,
            cursor: "pointer",
            transition: "color 0.3s",
            borderRadius: 8,
            padding: "0.3rem 1.2rem",
            ...(activeTab === "problem" && {
              border: "2px solid #bfcfff",
              boxShadow: "0 0 0 2px #bfcfff",
              color: "#fff",
              background: darkMode ? "#070c16" : "#f5f7fa",
            }),
          }}
          onClick={() => handleTabClick("problem", "/problem")}
        >
          Problem
        </span>
        <span
          style={{
            color: darkMode ? "#bfcfff" : "#222",
            fontSize: "1.1rem",
            fontWeight: 400,
            marginRight: 8,
            cursor: "pointer",
            transition: "color 0.3s",
            borderRadius: 8,
            padding: "0.3rem 1.2rem",
            ...(activeTab === "how" && {
              border: "3px solid #bfcfff",
              boxShadow: "0 0 0 3px #bfcfff",
              color: "#fff",
              background: darkMode ? "#070c16" : "#f5f7fa",
            }),
          }}
          onClick={() => handleTabClick("how", "/how-it-works")}
        >
          How It Works
        </span>
        <span
          style={{
            color: darkMode ? "#bfcfff" : "#222",
            fontSize: "1.1rem",
            fontWeight: 400,
            marginRight: 8,
            cursor: "pointer",
            transition: "color 0.3s",
            borderRadius: 8,
            padding: "0.3rem 1.2rem",
            ...(activeTab === "enterprise" && {
              border: "2px solid #bfcfff",
              boxShadow: "0 0 0 2px #bfcfff",
              color: "#fff",
              background: darkMode ? "#070c16" : "#f5f7fa",
            }),
          }}
          onClick={() => handleTabClick("enterprise", "/enterprise")}
        >
          Enterprise
        </span>
        <span
          style={{
            color: darkMode ? "#bfcfff" : "#222",
            fontSize: "1.1rem",
            fontWeight: 400,
            marginRight: 8,
            cursor: "pointer",
            transition: "color 0.3s",
            borderRadius: 8,
            padding: "0.3rem 1.2rem",
            ...(activeTab === "solution" && {
              border: "2px solid #bfcfff",
              boxShadow: "0 0 0 2px #bfcfff",
              color: "#fff",
              background: darkMode ? "#070c16" : "#f5f7fa",
            }),
          }}
          onClick={() => handleTabClick("solution", "/solution")}
        >
          Solution
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ color: darkMode ? "#bfcfff" : "#222", fontSize: 20 }}>
          ☀️
        </span>
        <div
          onClick={() => setDarkMode((d) => !d)}
          style={{
            width: 48,
            height: 28,
            background: darkMode ? "#fff" : "#222",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            padding: 2,
            margin: "0 8px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              background: darkMode ? "#070c16" : "#fff",
              borderRadius: "50%",
              marginLeft: darkMode ? 20 : 2,
              marginRight: darkMode ? 2 : 20,
              transition: "margin 0.2s, background 0.3s",
              boxShadow: darkMode ? undefined : "0 1px 4px #aaa",
            }}
          ></div>
        </div>
        <span style={{ color: darkMode ? "#bfcfff" : "#222", fontSize: 20 }}>
          🌙
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
