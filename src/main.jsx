import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Añadido
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider> {/* Añadido */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);