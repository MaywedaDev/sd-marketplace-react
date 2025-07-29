import React from "react";
import { Icon } from "@iconify/react";

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
  prependIcon?: string;
  appendIcon?: string;
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
  prependIcon,
  appendIcon,
}: FormInputProps) {
  return (
    <div className={containerClassNames || "w-full flex flex-col gap-1"}>
      {label && <span className="font-medium">{label}</span>}

      <div
        className={`w-full flex p-3 rounded-lg bg-form-bg hover:border hover:bg-white hover:border-primary ${contentClassNames}`}
      >
        {prependIcon && <Icon icon={prependIcon} width={20} />}
        <input
          name={name}
          className={"h-full w-full outline-none"}
          type={type || "text"}
          onChange={onChange}
          placeholder={placeholder || `Enter your ${name}`}
          required={required}
          value={value}
          disabled={disabled}
        />
        {appendIcon && <Icon icon={appendIcon} width={20} />}
      </div>
      {messages && (
        <>
          {/* {messages.valueMissing && (
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
            )} */}
        </>
      )}
    </div>
  );
}
