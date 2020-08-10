import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/UseDebounce";
import { OutlinedInput } from "./UI/OutlinedInput";

export const DebouncedInput = ({
  defaultValue = "",
  delay = 500,
  onChange = () => {},
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);

  const debouncedValue = useDebounce(value, delay);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <OutlinedInput
      defaultValue={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};
