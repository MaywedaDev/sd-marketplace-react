import { Form } from "radix-ui";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  disabled?: boolean;
};
export default function SubmitButton({
  className,
  text,
  disabled,
}: SubmitButtonProps) {
  return (
    <Form.Submit asChild>
      <button
        type="submit"
        disabled={disabled}
        className={`w-full ${
          disabled
            ? "bg-text-secondary opacity-75"
            : "bg-primary hover:bg-secondary text-btn-text"
        } text-white py-3 rounded mt-6 ${className}`}
      >
        {text || "Submit"}
      </button>
    </Form.Submit>
  );
}
