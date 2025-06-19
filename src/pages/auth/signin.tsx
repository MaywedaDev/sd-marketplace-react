import React from "react";
import { Icon } from "@iconify/react";
import { Form } from "radix-ui";
import FormInput from "@/components/Form/FormInput";
import SubmitButton from "@/components/Form/SubmitButton";

export default function Signin() {
  return (
    <div className="w-full flex flex-col">
      <div className="px-6 flex gap-4 items-center h-[72px]">
        <Icon icon="mdi:arrow-left" height={20} />

        <h3 className="mx-auto font-medium">SIGN UP</h3>
      </div>
      <Form.Root className="w-full flex flex-col space-y-4 px-6">
        <FormInput
          name="name"
          type="text"
          label="Name"
          required
          messages={{ valueMissing: "Name is required" }}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          required
          messages={{ valueMissing: "Email is required" }}
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          required
          messages={{ valueMissing: "Password is required" }}
        />

        <SubmitButton />
      </Form.Root>

      <div className="w-full px-12 py-4 flex justify-between gap-6">
        <div className="w-full bg-gray-400 h-[60px]">
          <button className="w-full h-full flex items-center justify-center gap-2">
            <Icon color="white" icon="mdi:google" height={28} />
          </button>
        </div>
        <div className="w-full bg-gray-400 h-[60px]">
          <button className="w-full h-full flex items-center justify-center gap-2">
            <Icon color="white" icon="mdi:apple" height={28} />
          </button>
        </div>
      </div>

      <p className="text-[12px] text-gray-400 px-6">
        By signing up, you are agreeing to our{" "}
        <span className="underline">Terms & Conditions</span> and{" "}
        <span className="underline">Privacy Policy.</span>
      </p>
    </div>
  );
}
