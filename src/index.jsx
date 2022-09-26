import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import App from './components/app.jsx';




root.render(
<Router>
  <App />
</Router>
  );