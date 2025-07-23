import React from "react";
import { Outlet, Link } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col w-full">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} SD Marketplace</p>
      </footer>
    </div>
  );
};

export default AppLayout;
