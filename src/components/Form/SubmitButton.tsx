import React from "react";
import { Form } from "radix-ui";

type SubmitButtonProps = {
  className?: string;
};
export default function SubmitButton({ className }: SubmitButtonProps) {
  return (
    <Form.Submit asChild>
      <button
        type="submit"
        className={className || "w-full bg-primary text-white py-3 rounded"}
      >
        Submit
      </button>
    </Form.Submit>
  );
}
