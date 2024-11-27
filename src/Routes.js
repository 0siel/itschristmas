import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import App from "./App";

function Routespage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default Routespage;
