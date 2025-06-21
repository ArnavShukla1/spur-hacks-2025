import React from "react";

function EnterpriseSection({ darkMode }) {
  return (
    <div
      className={`relative overflow-hidden bg-cover bg-no-repeat py-24 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, #23243a 0%, #2a2340 100%)",
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
        className="relative container mx-auto px-4"
        style={{ paddingTop: 100, zIndex: 1 }}
      >
        {/* Enterprise Feature Cards (Single Row) */}
        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            marginBottom: 60,
            position: "relative",
            width: 1200,
            maxWidth: "98vw",
            alignItems: "flex-start",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "rgba(44, 36, 66, 0.55)",
              borderRadius: 28,
              boxShadow: "0 8px 32px #b39ddb44, 0 1.5px 0 #222",
              padding: 40,
              flex: 1,
              minWidth: 0,
              minHeight: 320,
              height: 340,
              border: "1.5px solid #b39ddb",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              fontFamily: "Inter, sans-serif",
              backdropFilter: "blur(12px)",
              transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 40px #b39ddb77, 0 2px 0 #222")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px #b39ddb44, 0 1.5px 0 #222")
            }
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
                  color: "#b39ddb",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #b39ddb33",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b39ddb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
              <span
                style={{
                  background: "#6a4fb3",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "4px 16px",
                  letterSpacing: 0.2,
                  boxShadow: "0 1px 6px #6a4fb355",
                }}
              >
                Enterprise Identity
              </span>
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 26,
                marginBottom: 10,
                color: "#fff",
                letterSpacing: -0.5,
                textShadow: "0 2px 8px #0006",
              }}
            >
              Single Sign-On (SSO)
            </div>
            <div
              style={{
                color: "#bdbdbd",
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.5,
                background: "rgba(44,36,66,0.18)",
                borderRadius: 8,
                padding: "8px 12px",
                marginTop: 2,
              }}
            >
              SAML and OAuth integration with your existing identity providers
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              background: "rgba(44, 36, 66, 0.55)",
              borderRadius: 28,
              boxShadow: "0 8px 32px #b39ddb44, 0 1.5px 0 #222",
              padding: 40,
              flex: 1,
              minWidth: 0,
              minHeight: 320,
              height: 340,
              border: "1.5px solid #b39ddb",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              fontFamily: "Inter, sans-serif",
              backdropFilter: "blur(12px)",
              transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 40px #b39ddb77, 0 2px 0 #222")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px #b39ddb44, 0 1.5px 0 #222")
            }
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
                  color: "#b39ddb",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #b39ddb33",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b39ddb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <span
                style={{
                  background: "#6a4fb3",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "4px 16px",
                  letterSpacing: 0.2,
                  boxShadow: "0 1px 6px #6a4fb355",
                }}
              >
                Secure Access
              </span>
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 26,
                marginBottom: 10,
                color: "#fff",
                letterSpacing: -0.5,
                textShadow: "0 2px 8px #0006",
              }}
            >
              Relationship-Based Access Control
            </div>
            <div
              style={{
                color: "#bdbdbd",
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.5,
                background: "rgba(44,36,66,0.18)",
                borderRadius: 8,
                padding: "8px 12px",
                marginTop: 2,
              }}
            >
              Granular permissions ensure that employees can only access the
              knowledge they need, with full audit trails and compliance
              reporting
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{
              background: "rgba(44, 36, 66, 0.55)",
              borderRadius: 28,
              boxShadow: "0 8px 32px #b39ddb44, 0 1.5px 0 #222",
              padding: 40,
              flex: 1,
              minWidth: 0,
              minHeight: 320,
              height: 340,
              border: "1.5px solid #b39ddb",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              fontFamily: "Inter, sans-serif",
              backdropFilter: "blur(12px)",
              transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 40px #b39ddb77, 0 2px 0 #222")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px #b39ddb44, 0 1.5px 0 #222")
            }
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
                  color: "#b39ddb",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #b39ddb33",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b39ddb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                </svg>
              </span>
              <span
                style={{
                  background: "#6a4fb3",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "4px 16px",
                  letterSpacing: 0.2,
                  boxShadow: "0 1px 6px #6a4fb355",
                }}
              >
                Your Infrastructure
              </span>
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 26,
                marginBottom: 10,
                color: "#fff",
                letterSpacing: -0.5,
                textShadow: "0 2px 8px #0006",
              }}
            >
              Private Cloud Infrastructure
            </div>
            <div
              style={{
                color: "#bdbdbd",
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.5,
                background: "rgba(44,36,66,0.18)",
                borderRadius: 8,
                padding: "8px 12px",
                marginTop: 2,
              }}
            >
              Dedicated virtual private clouds with complete data isolation and
              enterprise-grade security controls
            </div>
          </div>
        </div>
        {/* Enterprise Deployment Options Section */}
        <div
          style={{
            background: "rgba(30,40,60,0.95)",
            borderRadius: 32,
            boxShadow: "0 4px 32px #b39ddb33",
            padding: "48px 32px 32px 32px",
            width: 1200,
            maxWidth: "98vw",
            margin: "0 auto",
            marginBottom: 32,
            color: "#fff",
            border: "1.5px solid #bfcfff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 8,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                fontSize: 40,
                color: "#bfcfff",
                background: "#232a3a",
                borderRadius: 12,
                padding: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#bfcfff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
              </svg>
            </span>
            <span style={{ fontWeight: 700, fontSize: 32, letterSpacing: -1 }}>
              Enterprise Deployment Options
            </span>
          </div>
          <div
            style={{
              color: "#bdbdbd",
              fontSize: 20,
              marginBottom: 36,
              textAlign: "center",
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >
            Choose the deployment model that fits your needs
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              width: "100%",
              justifyContent: "center",
              marginBottom: 8,
              boxSizing: "border-box",
            }}
          >
            {/* Cloud Deployment */}
            <div
              style={{
                background: "rgba(60,70,100,0.7)",
                borderRadius: 24,
                padding: 48,
                flex: 1,
                minWidth: 0,
                border: "1.5px solid #bfcfff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 24px #b39ddb33",
                transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  color: "#bfcfff",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bfcfff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19a4.5 4.5 0 0 0 0-9c-.7 0-1.4.1-2 .4A5 5 0 1 0 6.5 19Z" />
                </svg>
              </span>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 26,
                  marginBottom: 8,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Cloud Deployment
              </div>
              <div
                style={{
                  color: "#bdbdbd",
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Dedicated VPCs with enterprise security
              </div>
            </div>
            {/* Hybrid Configuration */}
            <div
              style={{
                background: "rgba(60,70,100,0.7)",
                borderRadius: 24,
                padding: 48,
                flex: 1,
                minWidth: 0,
                border: "1.5px solid #bfcfff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 24px #b39ddb33",
                transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  color: "#bfcfff",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bfcfff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </span>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 26,
                  marginBottom: 8,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Hybrid Configuration
              </div>
              <div
                style={{
                  color: "#bdbdbd",
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Mix of cloud and on-premise components
              </div>
            </div>
            {/* On-Premise */}
            <div
              style={{
                background: "rgba(60,70,100,0.7)",
                borderRadius: 24,
                padding: 48,
                flex: 1,
                minWidth: 0,
                border: "1.5px solid #bfcfff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 24px #b39ddb33",
                transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  color: "#bfcfff",
                  background: "#232a3a",
                  borderRadius: 12,
                  padding: 10,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bfcfff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                </svg>
              </span>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 26,
                  marginBottom: 8,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                On-Premise
              </div>
              <div
                style={{
                  color: "#bdbdbd",
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Complete deployment within your infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseSection;
