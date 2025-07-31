import { Icon } from "@iconify/react";

import FormInput from "@/components/Form/FormInput";
import SubmitButton from "@/components/Form/SubmitButton";
import Button from "@/components/Shared/Button";
import { useState } from "react";
import { signUp } from "@/lib/auth";

export default function SignUp() {
  const [stage, setStage] = useState<0 | 1>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              await signUp(form.name, form.email, form.password);
              setStage(1);
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
              <div className="flex gap-3">
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
                <input className="h-18 w-12 rounded-lg bg-form-bg border border-form-bg focus:bg-white focus:border-primary outline-0 text-3xl text-center" />
              </div>
              <p className="text-sm my-2">Resend code via email</p>
            </div>
            <Button>Continue</Button> */}
          </div>
        </>
      )}
    </div>
  );
}
