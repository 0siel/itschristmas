import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function RedirectPage() {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("url");

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl; // Redirect to the URL
    }
  }, [redirectUrl]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {redirectUrl ? (
        <>
          <h1>Redirecting...</h1>
          <p>
            If you are not redirected, <a href={redirectUrl}>click here</a>.
          </p>
        </>
      ) : (
        <h1>No URL provided!</h1>
      )}
    </div>
  );
}

export default RedirectPage;
