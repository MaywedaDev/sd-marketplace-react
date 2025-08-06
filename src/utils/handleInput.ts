import type React from "react";

const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  cb: React.Dispatch<React.SetStateAction<unknown>>
) => {
  const { name, value } = e.target;
  cb((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export default handleInput;
