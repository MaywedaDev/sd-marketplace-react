import { Icon } from "@iconify/react";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col w-full">
      <header></header>
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
