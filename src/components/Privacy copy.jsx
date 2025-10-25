import React, { useState, useEffect } from 'react';

const LegalPages = () => {
    // Simple router state management
    const [currentPage, setCurrentPage] = useState('privacy');
    const [isLoading, setIsLoading] = useState(false);



    const pageData = {
        privacy: {
            title: 'Privacy Policy',
            icon: '🔒',
            subtitle: 'Our website respects your privacy. Read here how we use your personal information, how we keep it secure, and when and how we share it.',
            color: 'primary',
            bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            route: '/legal/privacy-policy',
            details: [
                'We will only use your personal information with your consent.',
                'We will not store your personal information on any server.',
                'We will not share your personal information with any third party.'
            ]
        },
        terms: {
            title: 'Terms and Conditions',
            icon: '📋',
            subtitle: 'Read here our terms and conditions. It clarifies the rules and terms of use for our website and services.',
            color: 'success',
            bgGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            route: '/legal/terms-conditions',
            details: [
                'Please read our terms and conditions carefully before using our website and services.',
                'By using our services, you agree to our terms and conditions.',
                'We may change our terms and conditions from time to time, so please check them regularly.'
            ]
        },
        responsibility: {
            title: 'Game Responsibility',
            icon: '🎮',
            subtitle: 'Here we outline our responsibilities related to the games provided on our website.',
            color: 'warning',
            bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            route: '/legal/game-responsibility',
            details: [
                'We are committed to providing fair and responsible gaming experiences.',
                'We ensure that our games comply with all relevant regulations and standards.',
                'If you have any concerns about the games, please contact us.'
            ]
        }
    };

    // Navigate to different pages
    const navigateTo = (page) => {
        setIsLoading(true);

        // Simulate URL change and page loading
        setTimeout(() => {
            setCurrentPage(page);

            // Update browser URL (simulation)
            window.history.pushState(
                { page },
                pageData[page].title,
                pageData[page].route
            );

            // Update document title
            document.title = `${pageData[page].title} | Legal Center`;

            setIsLoading(false);
        }, 300);
    };

    // Handle browser back/forward
    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.page) {
                setCurrentPage(event.state.page);
            }
        };

        window.addEventListener('popstate', handlePopState);

        // Set initial page title
        document.title = `${pageData[currentPage].title} | Legal Center`;

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [currentPage]);

    const current = pageData[currentPage];

    return (
        <>
            {/* Bootstrap CSS */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.0/font/bootstrap-icons.min.css"
                rel="stylesheet"
            />

            <div className="legal-app">
                {/* Loading Overlay */}
                {isLoading && (
                    <div className="loading-overlay">
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                            <p className="loading-text">Loading...</p>
                        </div>
                    </div>
                )}

                {/* Navigation Header */}
                <nav className="navbar-custom">
                    <div className="container">
                        <div className="row w-100 align-items-center">
                            <div className="col-md-6">
                                <div className="brand">
                                    <h4 className="brand-title mb-0">
                                        ⚖️ Legal Center
                                    </h4>
                                    <div className="breadcrumb-custom">
                                        <span className="breadcrumb-item">Legal</span>
                                        <i className="bi bi-chevron-right"></i>
                                        <span className="breadcrumb-active">{current.title}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="url-display">
                                    <i className="bi bi-link-45deg me-2"></i>
                                    <code className="current-url">{current.route}</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="main-content">
                    <div className="container-fluid py-5">
                        {/* Navigation Pills */}
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="nav-pills-container">
                                    {Object.entries(pageData).map(([key, data]) => (
                                        <button
                                            key={key}
                                            className={`nav-pill-route ${currentPage === key ? 'active' : ''}`}
                                            onClick={() => navigateTo(key)}
                                            disabled={isLoading}
                                        >
                                            <div className="pill-content">
                                                <div className="pill-icon">{data.icon}</div>
                                                <div className="pill-info">
                                                    <div className="pill-title">{data.title}</div>
                                                    <div className="pill-route">{data.route}</div>
                                                </div>
                                            </div>
                                            <div
                                                className="pill-gradient"
                                                style={{ background: data.bgGradient }}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Page Content */}
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="page-container">
                                    {/* Page Header */}
                                    <div
                                        className="page-header"
                                        style={{
                                            background: current.bgGradient
                                        }}
                                    >
                                        <div className="header-content">
                                            <div className="header-icon">{current.icon}</div>
                                            <div className="header-text">
                                                <h1 className="page-title">{current.title}</h1>
                                                <p className="page-subtitle">{current.subtitle}</p>
                                                <div className="page-meta">
                                                    <span className="meta-item">
                                                        <i className="bi bi-link me-1"></i>
                                                        {current.route}
                                                    </span>
                                                    <span className="meta-item">
                                                        <i className="bi bi-calendar me-1"></i>
                                                        Updated: {new Date().toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="page-body">
                                        {/* Alert Notice */}
                                        <div className="alert-custom">
                                            <div className="alert-icon">
                                                <i className="bi bi-info-circle-fill"></i>
                                            </div>
                                            <div className="alert-content">
                                                <h6 className="alert-title">Important Information</h6>
                                                <p className="alert-text mb-0">
                                                    This page contains legally binding information. Please read carefully and contact support if you have questions.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Policy Details */}
                                        <div className="content-section">
                                            <h3 className="section-title">
                                                <i className="bi bi-file-text me-2"></i>
                                                {current.title} Details
                                            </h3>

                                            <div className="details-list">
                                                {current.details.map((detail, index) => (
                                                    <div key={index} className="detail-item">
                                                        <div className="detail-marker">
                                                            <div
                                                                className="marker-number"
                                                                style={{ background: current.bgGradient }}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                        </div>
                                                        <div className="detail-content">
                                                            <div className="detail-text">{detail}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Section */}
                                        <div className="action-section">
                                            <div className="action-header">
                                                <h4 className="action-title">Need More Information?</h4>
                                                <p className="action-subtitle">
                                                    Our team is here to help you understand these policies better.
                                                </p>
                                            </div>
                                            <div className="action-buttons">
                                                <button
                                                    className="btn-action btn-outline"
                                                    style={{ borderColor: current.bgGradient.match(/#[a-fA-F0-9]{6}/)[0] }}
                                                >
                                                    <i className="bi bi-envelope me-2"></i>
                                                    Contact Support
                                                </button>
                                                <button
                                                    className="btn-action btn-primary"
                                                    style={{ background: current.bgGradient }}
                                                >
                                                    <i className="bi bi-check-circle me-2"></i>
                                                    I Understand
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Page Footer */}
                                    <div className="page-footer">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <div className="footer-nav">
                                                    <span className="footer-label">Quick Navigation:</span>
                                                    {Object.entries(pageData).map(([key, data]) => (
                                                        <button
                                                            key={key}
                                                            className={`footer-link ${currentPage === key ? 'active' : ''}`}
                                                            onClick={() => navigateTo(key)}
                                                            disabled={isLoading}
                                                        >
                                                            {data.icon} {data.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-md-end">
                                                <div className="share-section">
                                                    <span className="share-label">Share this page:</span>
                                                    <button className="share-btn" title="Copy URL">
                                                        <i className="bi bi-clipboard"></i>
                                                    </button>
                                                    <button className="share-btn" title="Print">
                                                        <i className="bi bi-printer"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .legal-app {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
        }

        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-spinner {
          text-align: center;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          color: #667eea;
          font-weight: 600;
          margin: 0;
        }

        .navbar-custom {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand-title {
          color: #2c3e50;
          font-weight: 700;
        }

        .breadcrumb-custom {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #6c757d;
          margin-top: 0.25rem;
        }

        .breadcrumb-active {
          color: #667eea;
          font-weight: 600;
        }

        .url-display {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 0.9rem;
        }

        .current-url {
          background: #f8f9fa;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          color: #667eea;
          font-size: 0.85rem;
        }

        .nav-pills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .nav-pill-route {
          position: relative;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 15px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          text-align: left;
        }

        .nav-pill-route:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .nav-pill-route.active {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        }

        .nav-pill-route:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .pill-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }

        .pill-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .pill-title {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.25rem;
        }

        .pill-route {
          font-size: 0.85rem;
          color: #667eea;
          font-family: 'Courier New', monospace;
        }

        .pill-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-pill-route.active .pill-gradient,
        .nav-pill-route:hover .pill-gradient {
          opacity: 1;
        }

        .page-container {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .page-header {
          color: white;
          padding: 3rem 2rem;
          position: relative;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .header-icon {
          font-size: 4rem;
          line-height: 1;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .page-meta {
          display: flex;
          gap: 2rem;
        }

        .meta-item {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .page-body {
          padding: 2rem;
        }

        .alert-custom {
          display: flex;
          gap: 1rem;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-left: 4px solid #667eea;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .alert-icon {
          color: #667eea;
          font-size: 1.5rem;
        }

        .alert-title {
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .alert-text {
          color: #6c757d;
        }

        .section-title {
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .details-list {
          margin-bottom: 2rem;
        }

        .detail-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .detail-item:hover {
          background: #e9ecef;
          transform: translateX(5px);
        }

        .detail-marker {
          flex-shrink: 0;
        }

        .marker-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .detail-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #495057;
        }

        .action-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .action-title {
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .action-subtitle {
          color: #6c757d;
          margin-bottom: 2rem;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-action {
          padding: 0.75rem 2rem;
          border-radius: 25px;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-outline {
          background: white;
          border: 2px solid #667eea !important;
          color: #667eea;
        }

        .btn-outline:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .btn-primary {
          color: white;
          border: 2px solid transparent;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .page-footer {
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
          padding: 1.5rem 2rem;
        }

        .footer-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-label {
          font-weight: 600;
          color: #6c757d;
          font-size: 0.9rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #667eea;
          font-size: 0.85rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer-link:hover:not(:disabled) {
          background: #667eea;
          color: white;
        }

        .footer-link.active {
          background: #667eea;
          color: white;
        }

        .footer-link:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .share-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .share-label {
          font-size: 0.9rem;
          color: #6c757d;
          font-weight: 600;
        }

        .share-btn {
          background: none;
          border: 1px solid #e9ecef;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c757d;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-btn:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .page-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn-action {
            width: 100%;
          }
        }
      `}</style>
        </>
    );
};

export default LegalPages;