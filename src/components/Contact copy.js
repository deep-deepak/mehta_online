import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <button
        className="btn btn-lg px-5 py-3 fw-bold rounded-pill border-0"
        style={{
          background: "linear-gradient(45deg, #32CD32, #228B22, #32CD32)",
          color: "white",
          fontSize: "1.2rem",
          boxShadow: "0 15px 35px rgba(50, 205, 50, 0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 20px 45px rgba(50, 205, 50, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 15px 35px rgba(50, 205, 50, 0.4)";
        }}
        onClick={() => navigate('/')}
      >
        Contact
      </button>

    </Container>
  );
};

export default Contact;
