import { Form } from "radix-ui";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};
export default function SubmitButton({ className, text }: SubmitButtonProps) {
  return (
    <Form.Submit asChild>
      <button
        type="submit"
        className={
          className || "w-full bg-text-secondary text-white py-3 rounded mt-6"
        }
      >
        {text || "Submit"}
      </button>
    </Form.Submit>
  );
}
