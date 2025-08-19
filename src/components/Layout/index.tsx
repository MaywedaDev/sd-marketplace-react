import { Icon } from "@iconify/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";

const AppLayout: React.FC = () => {
  // This component serves as the main layout for the application
  // It includes a header, footer, and a main content area where nested routes will be rendered

  // It needs to be wrapped with the AuthContextProvider in the main App component
  // to provide authentication context to the nested routes

  // Logic for redirection based on authentication state can be added here

  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    // Redirect to sign-in page if not logged in
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-full flex flex-col w-full">
      <main className="flex-1 max-h-full flex flex-col">
        <div className="w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
        <div className="w-full h-[64px] bg-white flex items-center gap-4 justify-between px-6 py-4 shadow">
          <button className="flex flex-col items-center">
            <Icon height={24} icon="mdi:home-outline" />
            <span className="font-medium text-sm">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Icon height={24} icon="mdi:grid" />
            <span className="font-medium text-sm">Catgories</span>
          </button>
          <button className="flex flex-col items-center">
            <Icon height={24} icon="mdi:add" />
            <span className="font-medium text-sm">Post</span>
          </button>
          <button className="flex flex-col items-center">
            <Icon height={24} icon="mdi:message-outline" />
            <span className="font-medium text-sm">Chat</span>
          </button>
          <button className="flex flex-col items-center">
            <Icon height={24} icon="mdi:user-outline" />
            <span className="font-medium text-sm">Profile</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
