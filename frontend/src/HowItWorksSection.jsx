import React from "react";

function HowItWorksSection({ darkMode }) {
  const cardBackgroundColor = darkMode
    ? "rgba(44, 36, 66, 0.55)"
    : "rgba(255, 255, 255, 0.7)";
  const textColor = darkMode ? "#fff" : "#333";
  const mutedTextColor = darkMode ? "#bdbdbd" : "#666";
  const borderColor = darkMode ? "#b39ddb" : "#9C27B0";
  const boxShadowColor = darkMode ? "#b39ddb" : "#9C27B0";
  const iconBgColor = darkMode ? "#232a3a" : "#EEEEEE";
  const stepTagBgColor = darkMode ? "#6a4fb3" : "#7E57C2";

  return (
    <div
      className={`relative overflow-hidden bg-cover bg-no-repeat py-24 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
      style={{
        maxWidth: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, #4a4a4a 0%, #6a6a6a 100%)",
          animation: "enterprise-bg-move 12s ease-in-out infinite alternate",
          zIndex: 0,
          opacity: 0.92,
        }}
      ></div>
      <style>{`
        @keyframes enterprise-bg-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <div
        className="relative container mx-auto px-0"
        style={{ paddingTop: 100, zIndex: 1, margin: 0, padding: 0 }}
      >
        {/* Add summary screenshot image as a card, styled and animated like the step cards */}
        
        <img
  src="/summary-screenshot.png"
  alt="Summary UI Example"
  style={{
    position: "absolute",
    top: "130px",
    left: "300px",
    width: "600px",
    height: "410px",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
  }}
/>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 60,
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          {[
            {
              step: "Step 1",
              title: "Enterprise Data Integration",
              text: "Seamless connectors extract data from your existing enterprise tools and systems. Our integration layer monitors data streams and ensures consistent, real-time synchronization across all your knowledge sources.",
              icon: (
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={borderColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
                  <ellipse cx="12" cy="18" rx="8" ry="3" />
                </svg>
              ),
              align: "flex-start",
            },
            {
              step: "Step 2",
              title: "Cognitive Reasoning Agents",
              text: "Multi-agent reasoning clusters continuously analyze communication patterns, detect emerging knowledge, and make autonomous decisions about information relevance. These agents self-optimize their reasoning models and collaborate to build dynamic knowledge graphs.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={borderColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 .34.03.67.08 1H4v2h1.08c-.05.33-.08.66-.08 1 0 3.87 3.13 7 7 7s7-3.13 7-7c0-.34-.03-.67-.08-1H20v-2h-1.08c.05-.33.08-.66.08-1 0-3.87-3.13-7-7-7z" />
                  <path d="M8 9h8M8 15h8" />
                </svg>
              ),
              align: "flex-end",
            },
            {
              step: "Step 3",
              title: "Real-Time Insight Delivery",
              text: "Key insights are synthesized and displayed instantly, allowing startups to view critical knowledge right on their dashboard—without waiting, without digging.",
              icon: (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={borderColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              ),
              align: "flex-start",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                alignSelf: item.align,
                background: cardBackgroundColor,
                borderRadius: 28,
                boxShadow: `0 8px 32px ${boxShadowColor}44, 0 1.5px 0 ${
                  darkMode ? "#222" : "#999"
                }`,
                padding: 40,
                width: "min(540px, 90vw)",
                border: `1.5px solid ${borderColor}`,
                color: textColor,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontFamily: "Inter, sans-serif",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: `translateX(${
                  index % 2 === 0 ? "250px" : "-250px"
                })`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = `scale(1.05) translateX(${
                  index % 2 === 0 ? "250px" : "-250px"
                })`;
                e.currentTarget.style.boxShadow = `0 16px 48px ${boxShadowColor}77, 0 2px 0 ${
                  darkMode ? "#222" : "#999"
                }`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = `scale(1) translateX(${
                  index % 2 === 0 ? "250px" : "-250px"
                })`;
                e.currentTarget.style.boxShadow = `0 8px 32px ${boxShadowColor}44, 0 1.5px 0 ${
                  darkMode ? "#222" : "#999"
                }`;
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    color: borderColor,
                    background: iconBgColor,
                    borderRadius: 12,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 2px 8px ${boxShadowColor}33`,
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    background: stepTagBgColor,
                    color: "#fff",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "4px 16px",
                    letterSpacing: 0.2,
                    boxShadow: `0 1px 6px ${stepTagBgColor}55`,
                  }}
                >
                  {item.step}
                </span>
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 26,
                  marginBottom: 10,
                  color: textColor,
                  letterSpacing: -0.5,
                  textShadow: `0 2px 8px ${darkMode ? "#0006" : "#0003"}`,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: mutedTextColor,
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  background: darkMode
                    ? "rgba(44,36,66,0.18)"
                    : "rgba(0,0,0,0.05)",
                  borderRadius: 8,
                  padding: "8px 12px",
                  marginTop: 2,
                }}
              >
                {item.text}
              </div>
              {/* White sources box for Step 1 */}
              {index === 0 && (
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 8px 32px ${borderColor}33, 0 4px 16px ${borderColor}22`,
                    borderRadius: 12,
                    padding: "12px 16px",
                    margin: "24px 16px 0",
                    color: "#23243a",
                    fontSize: 14,
                    lineHeight: 1.4,
                    textAlign: "center",
                    width: "calc(100% - 32px)",
                    alignSelf: "center",
                  }}
                >
                  Notion &nbsp; | &nbsp; Slack
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
