import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col w-full">
      <header>
        <nav></nav>
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
