import { Icon } from "@iconify/react";
import { Form } from "radix-ui";
import FormInput from "@/components/Form/FormInput";
import SubmitButton from "@/components/Form/SubmitButton";
import Button from "@/components/Shared/Button";

export default function Signin() {
  return (
    <div className="w-full h-full flex flex-col bg-body px-4">
      <div className="flex gap-4 items-center h-[72px] relative">
        <div className="absolute">
          <Icon icon="mdi:arrow-left" height={24} />
        </div>

        <h3 className="mx-auto font-semibold text-xl">Log In</h3>
      </div>
      <Form.Root className="w-full flex flex-col space-y-4 my-3">
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

        <p className="font-semibold text-sm ">Forgot Password?</p>

        <SubmitButton text="Log In" />
      </Form.Root>

      <div className="flex gap-4 items-center my-1">
        <div className="flex-grow border-t border-black"></div>
        <span>OR</span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      <div className="w-full py-4 flex flex-col gap-3">
        <Button icon="mdi:apple">Log in with Apple</Button>

        <Button
          icon="flat-color-icons:google"
          className="bg-white !text-primary"
        >
          Log in with Google
        </Button>
      </div>
    </div>
  );
}
