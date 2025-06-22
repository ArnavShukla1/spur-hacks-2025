import React from "react";

function SolutionSection({ darkMode }) {
  const textColor = darkMode ? "#fff" : "#111";
  const mutedTextColor = darkMode ? "#ccc" : "#444";
  const bgColor = darkMode ? "#0c0c0c" : "#f9f9f9";
  const cardBg = darkMode ? "#1c1c2b" : "#fff";
  const shadowColor = darkMode ? "#bb86fc" : "#7e57c2";

  const features = [
    {
      title: "Instantly interface with your team’s disparate systems",
      subtitle:
        "(Jira, Confluence, GitHub, Slack, and more) through a single, AI-powered lens",
    },
    {
      title: "Ask natural-language questions",
      subtitle:
        '("What issues is the frontend team facing?") and get precise, context-rich answers—no manual digging',
    },
    {
      title: "Flag blockers & dependencies in real time",
      subtitle: "so you can act before meetings, not after",
    },
    {
      title: "Train custom AI agents",
      subtitle:
        "on your organization’s structured activity data—turn every ticket, doc, and message into a living knowledge base",
    },
    {
      title: "Autonomously surface insights",
      subtitle: "risk signals, priority shifts, team capacity alerts",
    },
    {
      title: "Drive routine workflows",
      subtitle:
        "have agents create tickets, assign reviewers, even draft release notes—so your people focus on higher-order work",
    },
  ];

  return (
    <div
      style={{
        background: bgColor,
        padding: "100px 0",
        fontFamily: "Inter, sans-serif",
        color: textColor,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: textColor,
              marginBottom: 10,
            }}
          >
            Human-First Intelligence
          </h2>
          <h3
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: shadowColor,
            }}
          >
            Today & Tomorrow
          </h3>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {features.map((item, i) => (
            <div
              key={i}
              style={{
                background: cardBg,
                borderRadius: 18,
                padding: "24px 28px",
                boxShadow: `0 6px 24px ${shadowColor}22`,
                border: `1px solid ${shadowColor}33`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = `0 12px 32px ${shadowColor}66`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = `0 6px 24px ${shadowColor}22`;
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: mutedTextColor,
                  lineHeight: 1.6,
                }}
              >
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
