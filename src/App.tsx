import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      {/* Create Routes */}
      <Router>
        <div className="App w-full min-h-screen flex flex-col items-center justify-center">
          <header className="App-header">
            <h1 className="text-3xl font-bold underline text-red-500">
              Welcome to My App
            </h1>
          </header>
          {/* Add Routes here */}
          <div className="max-w-[400px] h-[850px] w-full border-2 border-gray-300 rounded-lg shadow-lg flex flex-col my-8">
            <AppRoutes />
          </div>
        </div>
        {/* Add Route Components here */}

        <footer>
          <p>&copy; 2023 My App</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
