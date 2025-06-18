import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      {/* Create Routes */}
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to My App</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* Add Routes here */}
        </div>
        {/* Add Route Components here */}
        <AppRoutes />
        <footer>
          <p>&copy; 2023 My App</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
