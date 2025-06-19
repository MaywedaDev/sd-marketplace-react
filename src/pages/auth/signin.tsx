import React from "react";
import { Icon } from "@iconify/react";

export default function Signin() {
  return (
    <div className="w-full flex flex-col">
      <div className="px-6 flex gap-4 items-center py-8">
        <div className="w-3 h-3">
          <Icon icon="mdi:arrow-left" height={20} />
        </div>
        <h3 className="mx-auto font-medium">SIGNUP</h3>
      </div>
    </div>
  );
}
