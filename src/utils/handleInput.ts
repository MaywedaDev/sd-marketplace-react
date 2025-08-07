import type React from "react";
import type { AuthFormField } from "@/models/interfaces";

const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  cb: React.Dispatch<React.SetStateAction<AuthFormField>>
) => {
  const { name, value } = e.target;
  cb((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export default handleInput;
