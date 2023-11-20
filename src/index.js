import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "core/routes/AppRoutes";
import AppProvider from "core/providers/AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
