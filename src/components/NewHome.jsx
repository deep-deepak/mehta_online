import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NewHome = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919076333307"; // Your number with country code
    const message = "Hello! I'm interested in your service.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Clickable Image */}
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <img
          src="/mehtabanner.jpg"
          alt="Game"
          onClick={handleWhatsAppClick}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            cursor: "pointer",
            zIndex: 2,
            position: "relative",
          }}
        />

        {/* Gradient Overlay (optional, can remove if unwanted) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(135deg, rgba(139, 21, 56, 0.3) 0%, rgba(45, 27, 105, 0.3) 30%, rgba(255, 107, 53, 0.3) 70%, rgba(139, 21, 56, 0.3) 100%)",
            zIndex: 1,
          }}
        ></div>
      </div>



      {/* Global CSS */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-decoration-none small fw-medium"
    style={{
      color: "#CCCCCC",
      transition: "color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
    onMouseLeave={(e) => (e.target.style.color = "#CCCCCC")}
  >
    {label}
  </Link>
);

export default NewHome;
