import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

import FormInput from "@/components/Form/FormInput";
import SubmitButton from "@/components/Form/SubmitButton";
import Button from "@/components/Shared/Button";
import { signUp } from "@/lib/auth";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [stage, setStage] = useState<0 | 1>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  // const otpRefs = [
  //   useRef<HTMLInputElement>(null),
  //   useRef<HTMLInputElement>(null),
  //   useRef<HTMLInputElement>(null),
  //   useRef<HTMLInputElement>(null),
  //   useRef<HTMLInputElement>(null),
  //   useRef<HTMLInputElement>(null),
  // ];

  const handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleOtpChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   if (isNaN(Number(value))) return;

  //   setOtp((prev) => {
  //     const newOtp = [...prev];
  //     newOtp[index] = value.substring(value.length - 1);
  //     return newOtp;
  //   });

  //   // Move to next input if value exists
  //   if (value && index < 5) {
  //     otpRefs[index + 1].current?.focus();
  //   }
  // };

  // const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Backspace" && !otp[index] && index > 0) {
  //     otpRefs[index - 1].current?.focus();
  //   }
  // };

  return (
    <div className="w-full h-full flex flex-col bg-body px-4">
      <div className="flex gap-4 items-center h-[72px] relative">
        <div className="absolute">
          <Icon icon="mdi:arrow-left" height={24} />
        </div>

        <h3 className="mx-auto font-semibold text-xl">Sign up</h3>
      </div>
      {stage < 1 ? (
        <>
          <form
            className="w-full flex flex-col space-y-4 my-3"
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(Object.entries(e.currentTarget));
              // Handle form submission logic here
              const { success, message } = await signUp(
                form.name,
                form.email,
                form.password
              );

              if (success) {
                setStage(1);
              } else {
                console.log(message);
              }
            }}
          >
            <FormInput
              name="name"
              type="text"
              label="Name"
              value={form.name}
              onChange={handleInput}
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Name is required" }}
            />
            <FormInput
              name="email"
              type="email"
              label="Email"
              value={form.email}
              onChange={handleInput}
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Email is required" }}
            />

            <FormInput
              name="password"
              type="password"
              label="Password"
              value={form.password}
              onChange={handleInput}
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Password is required" }}
            />

            <SubmitButton
              disabled={
                form.email === "" || form.password === "" || form.name === ""
              }
              text="Sign Up"
            />
          </form>

          <div className="flex gap-4 items-center my-1">
            <div className="flex-grow border-t border-black"></div>
            <span>OR</span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          <div className="w-full py-4 flex flex-col gap-3">
            <Button icon="mdi:apple">Sign up with Apple</Button>

            <Button
              icon="flat-color-icons:google"
              className="bg-white !text-primary"
            >
              Sign up with Google
            </Button>
          </div>

          <Link to="/signin" className="text-primary mt-4 text-center">
            Already have an account? Log in
          </Link>

          <p className="text-[12px]">
            By signing up, you are agreeing to our{" "}
            <span className="text-primary">Terms & Conditions</span> and{" "}
            <span className="text-primary">Privacy Policy.</span>
          </p>
        </>
      ) : (
        <>
          <div className="w-full">
            <h4 className="text-lg font-semibold">Verify Email</h4>
            <p className="text-sm text-text-secondary">
              A verification link was sent to your email (${form.email})
            </p>
            {/* <div className="w-full my-6">
              <div className="flex gap-3 otp-inputs">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={otpRefs[idx]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center"
                  />
                ))}
              </div>
              <p className="text-sm my-2">Resend code via email</p>
            </div> */}
            {/* <Button
              disabled={otp.some((el) => el === "")}
              onClick={() => {
                console.log(otp);
              }}
            >
              Continue
            </Button> */}
          </div>
        </>
      )}
    </div>
  );
}
