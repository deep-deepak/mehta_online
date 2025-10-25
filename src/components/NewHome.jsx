import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NewHome = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919076333307"; // ✅ only digits
    // Your number with country code
    const message = "Hello! can i get 10% welcome bonus and my ID, please?.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Clickable Image */}
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <img
          src="/game.jpg"
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

      {/* Footer */}
      <div
        className="w-100 border-top border-light border-opacity-25"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-12 text-center">
              <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
                <FooterLink to="/legal/privacy-policy" label="Privacy Policy" />
                <FooterLink to="/legal/terms-conditions" label="Terms and Conditions" />
                <FooterLink to="/legal/game-responsibility" label="Customer Responsibility" />
              </div>
              <p
                className="small mb-0 lh-base mx-auto"
                style={{ color: "#AAAAAA", maxWidth: "800px" }}
              >
                <span className="fw-semibold text-white">Disclaimer:</span> This Website is only for 18+ users. If you are from Telangana, Orissa, Assam, Sikkim, and Nagaland, please leave the website immediately. Be aware of fraudsters, we only deal via <span className="fw-semibold text-success">WhatsApp</span>.
                <br /><br />
                <span className="fw-semibold text-white">About:</span> We Only Promote Fantasy Sports. No Real Money Involvement.
              </p>
            </div>
          </div>
        </div>
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
