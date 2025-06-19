import React from "react";
import { Form } from "radix-ui";

type FormInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  messages?: {
    valueMissing?: string;
    typeMismatch?: string;
    patternMismatch?: string;
  };
  containerClassNames?: string;
  contentClassNames?: string;
};

export default function FormInput({
  name,
  type,
  placeholder,
  required,
  label,
  containerClassNames,
  contentClassNames,
  onChange,
  value,
  disabled,
  messages,
}: FormInputProps) {
  return (
    <Form.Field name={name}>
      <div className={containerClassNames || "w-full flex flex-col gap-3"}>
        <Form.Label>{label}</Form.Label>
        <Form.Control asChild>
          <input
            className={
              contentClassNames || "p-3 rounded-lg border border-gray-300"
            }
            type={type || "text"}
            onChange={onChange}
            placeholder={placeholder || `Enter your ${name}`}
            required={required}
            value={value}
            disabled={disabled}
          />
        </Form.Control>
        {messages && (
          <>
            {messages.valueMissing && (
              <Form.Message match="valueMissing">
                {messages.valueMissing}
              </Form.Message>
            )}
            {messages.typeMismatch && (
              <Form.Message match="typeMismatch">
                {messages.typeMismatch}
              </Form.Message>
            )}
            {messages.patternMismatch && (
              <Form.Message match="patternMismatch">
                {messages.patternMismatch}
              </Form.Message>
            )}
          </>
        )}
      </div>
    </Form.Field>
  );
}
