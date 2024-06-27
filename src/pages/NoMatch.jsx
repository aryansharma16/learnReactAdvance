import React from 'react';

const NoMatch = () => {
  return (
    <div className="no-match-container">
      <div className="no-match-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or an error occurred.</p>
        <a href="/" className="home-link">Go Back Home</a>
      </div>
      
      <style jsx>{`
        .no-match-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: black;
          color: #fff;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .no-match-content {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #black;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-size: 6rem;
          margin-bottom: 0;
        }
        h2 {
          font-size: 2rem;
          margin: 10px 0;
        }
        p {
          font-size: 1.2rem;
          margin: 20px 0;
        }
        .home-link {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .home-link:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default NoMatch;
