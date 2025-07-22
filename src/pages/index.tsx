import Button from "@/components/Shared/Button";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-full px-4 flex flex-col">
      <div className="my-12">
        <h3 className="text-xl text-primary">What are you interested in</h3>
        <p className="text-text-secondary text-sm">
          Pick 3 categories you're interested in.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[...Array(9).fill("Clothing")].map((text, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 h-[130px] flex flex-col justify-between"
          >
            <div className="w-full bg-text-secondary rounded-lg h-full mb-2"></div>
            <span className="text-xs text-center font-semibold">{text}</span>
          </div>
        ))}
      </div>

      <Button className="mt-auto mb-14">Continue</Button>
    </div>
  );
}
