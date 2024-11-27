import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import App from "./App";

function RedirectPage() {
  const { encodedUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Decode the URL
    const targetUrl = decodeURIComponent(encodedUrl);

    // Redirect to the decoded URL
    if (targetUrl) {
      window.location.href = targetUrl; // Use direct window.location for external URLs
    } else {
      navigate("/"); // Fallback to home if URL is invalid
    }
  }, [encodedUrl, navigate]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Redirecting...</h1>
      <p>
        If redirection doesn't work, click{" "}
        <a href={decodeURIComponent(encodedUrl)}>here</a>.
      </p>
    </div>
  );
}

function Routespage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Dynamic redirect route */}
        <Route path="/redirect/:encodedUrl" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default Routespage;
