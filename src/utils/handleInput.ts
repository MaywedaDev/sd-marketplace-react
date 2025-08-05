const handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export default handleInput;
