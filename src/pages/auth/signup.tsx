import { Icon } from "@iconify/react";
import { Form } from "radix-ui";
import FormInput from "@/components/Form/FormInput";
import SubmitButton from "@/components/Form/SubmitButton";
import Button from "@/components/Shared/Button";
import { useState } from "react";

export default function SignUp() {
  const [stage, setStage] = useState<0 | 1>(1);
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
          <Form.Root
            className="w-full flex flex-col space-y-4 my-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission logic here
              setStage(1);
            }}
          >
            <FormInput
              name="name"
              type="text"
              label="Name"
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Name is required" }}
            />
            <FormInput
              name="email"
              type="email"
              label="Email"
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Email is required" }}
            />

            <FormInput
              name="password"
              type="password"
              label="Password"
              required
              contentClassNames="p-3 rounded-lg bg-form-bg border border-form-bg hover:bg-white outline-none hover:border-primary"
              messages={{ valueMissing: "Password is required" }}
            />

            <SubmitButton text="Sign Up" />
          </Form.Root>

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
            <h4 className="text-lg font-semibold">Confirmation Code</h4>
            <p className="text-sm text-text-secondary">
              Enter the code sent to your email (ogun*****gmail.com)
            </p>
            <div className="w-full my-6">
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
            <Button>Continue</Button>
          </div>
        </>
      )}
    </div>
  );
}
