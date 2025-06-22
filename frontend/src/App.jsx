import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HowItWorksSection from "./HowItWorksSection";
import EnterpriseSection from "./EnterpriseSection";
import SolutionSection from "./SolutionSection";
import ProblemSection from "./ProblemSection";
import ReactMarkdown from "react-markdown";
import "./App.css";

function Messages({ messages, onSummarize, showSummary, summary }) {
  // Extract the most important messages (e.g., those containing 'deadline', 'urgent', 'blocker', 'decision', or are the longest)
  let importantMessages = [];
  if (messages && messages.length > 0) {
    importantMessages = messages
      .filter(
        (m) =>
          /deadline|urgent|blocker|decision|asap|critical|important|due|reminder/i.test(
            m.text
          ) || m.text.length > 80
      )
      .slice(0, 3); // Show up to 3
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button style={{ marginTop: 32 }} onClick={() => onSummarize(messages)}>
        Summarise Slack Messages
      </button>
      {showSummary && (
        <div
          style={{
            marginTop: 32,
            background: "#fff",
            color: "#23243a",
            borderRadius: 16,
            padding: "2rem 2.5rem 2rem 2.5rem",
            maxWidth: 700,
            minWidth: 320,
            width: "90vw",
            boxShadow: "0 8px 32px #b39ddb33, 0 1.5px 0 #bfcfff",
            fontSize: "1.18rem",
            fontWeight: 500,
            textAlign: "left",
            border: "2px solid #bfcfff",
            position: "relative",
            transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
            overflow: "hidden",
            wordBreak: "break-word",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {/* Highlight important messages at the top */}
          {importantMessages.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontWeight: 700,
                  color: "#7c4dff",
                  fontSize: 18,
                  marginBottom: 6,
                }}
              >
                Key Messages
              </div>
              {importantMessages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    fontWeight: 700,
                    color: "#23243a",
                    marginBottom: 4,
                    background: "#f3eafe",
                    borderRadius: 6,
                    padding: "6px 12px",
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontSize: 28,
                color: "#7c4dff",
                background: "#ede7f6",
                borderRadius: 10,
                padding: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px #b39ddb33",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7c4dff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </span>
            <h2
              style={{
                color: "#7c4dff",
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              Insights & Summary
            </h2>
          </div>
          <div
            style={{
              margin: 0,
              color: "#23243a",
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            <ReactMarkdown>
              {summary ? summary : "Generating summary..."}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [messages, setMessages] = useState([]);
  const [summary, setSummary] = useState("");
  const [showSummary, setShowSummary] = useState(false);

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

  useEffect(() => {
    fetch("http://localhost:3001/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  const handleSummarize = async (messages) => {
    setShowSummary(true); // Show the summary box immediately
    setSummary(""); // Clear previous summary
    const res = await fetch("http://localhost:3001/messages/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
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
      ) : activeTab === "enterprise" ? (
        <EnterpriseSection darkMode={darkMode} />
      ) : activeTab === "solution" ? (
        <SolutionSection
          darkMode={darkMode}
          messages={messages}
          onSummarize={handleSummarize}
          showSummary={showSummary}
          summary={summary}
        />
      ) : activeTab === "problem" ? (
        <ProblemSection darkMode={darkMode} />
      ) : activeTab === "home" || activeTab === "features" ? (
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
            onClick={() => {
              setActiveTab("how");
              window.history.pushState({}, "", "/how-it-works");
            }}
          >
            Get Started
          </button>
          <Messages
            messages={messages}
            onSummarize={handleSummarize}
            showSummary={showSummary}
            summary={summary}
          />
        </div>
      ) : (
        <ProblemSection darkMode={darkMode} />
      )}
    </>
  );
}

export default App;
