import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          letterSpacing: "0.2em",
          color: "#b39ddb",
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
          color: "#c7aaff",
          margin: 0,
        }}
      >
        Org-Wide Brain
      </h1>
      <div
        style={{
          width: 80,
          height: 4,
          background: "#b39ddb",
          borderRadius: 2,
          margin: "1.5rem auto",
        }}
      />
      <div
        style={{
          fontSize: "1.5rem",
          color: "#bdbdbd",
          textAlign: "center",
          maxWidth: 700,
          marginBottom: "2.5rem",
        }}
      >
        Turn scattered knowledge into{" "}
        <span style={{ color: "#fff", fontWeight: 600 }}>
          AI-powered insights
        </span>{" "}
        for intelligent teams.
      </div>
      <button
        style={{
          background: "#b39ddb",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.2rem",
          border: "none",
          borderRadius: 10,
          padding: "0.75rem 2.5rem",
          boxShadow: "0 4px 24px #b39ddb55",
          cursor: "pointer",
          marginRight: 16,
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
