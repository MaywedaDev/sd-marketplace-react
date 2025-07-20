import Button from "@/components/Shared/Button";
import { useState } from "react";

export default function GetStarted() {
  const [stage, setStage] = useState(2);

  const Buttons = () => {
    return (
      <div className="flex w-full gap-2 mt-10">
        {[...Array(3).fill("")].map((_, i) => (
          <button
            onClick={() => setStage(i + 2)}
            key={i}
            className={`rounded-full w-4 h-4 ${
              stage - 2 === i ? "bg-white" : "bg-black"
            }`}
          ></button>
        ))}
      </div>
    );
  };

  if (stage === 1) {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between items-center">
        <div className="mt-10 w-[300px] h-[300px] rounded-lg bg-[#bbbbbb]"></div>

        <div className="w-full">
          <Button className="mb-6">Get Started</Button>
          <p className="text-[12px] font-semibold text-center">
            By proceeding to use Campus, you agree to the{" "}
            <span className="text-primary">Terms & Conditions</span> and{" "}
            <span className="text-primary">Privacy Policy</span>.
          </p>
        </div>
      </div>
    );
  }

  if (stage === 2) {
    return (
      <div className="w-full h-full p-6 flex flex-col  items-center">
        <div className="mt-10 w-[300px] h-[300px] rounded-lg bg-[#bbbbbb]"></div>

        <div className="mt-28 w-full">
          <p className="font-semibold text-2xl">Buy & Sell</p>
          <p>Secure student-to-student deals made just for your campus.</p>
        </div>
        <Buttons />
      </div>
    );
  }

  if (stage === 3) {
    return (
      <div className="w-full h-full p-6 flex flex-col  items-center">
        <div className="mt-10 w-[300px] h-[300px] rounded-lg bg-[#bbbbbb]"></div>

        <div className="mt-28 w-full">
          <p className="font-semibold text-2xl">Verified Community</p>
          <p>Only real students, real listings, and real savings.</p>
        </div>
        <Buttons />
      </div>
    );
  }

  if (stage === 4) {
    return (
      <div className="w-full h-full p-6 flex flex-col  items-center">
        <div className="mt-10 w-[300px] h-[300px] rounded-lg bg-[#bbbbbb]"></div>

        <div className="mt-28 w-full">
          <p className="font-semibold text-2xl">Easy, Fast, Yours</p>
          <p>Built for campus life. Powered by you.</p>
        </div>
        <Buttons />
        <Button className="mt-3">Get Started</Button>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 flex flex-col justify-center items-center">
      <div className="mt-10 w-[140px] h-[140px] rounded-lg bg-[#bbbbbb]"></div>
    </div>
  );
}
