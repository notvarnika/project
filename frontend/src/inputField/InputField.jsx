import React from "react";

function InputField({
  label,
  id,
  className,
  labelClassName,
  inputClassName,
  type = "text",
  onChange,
  required,
  ...rest
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        onChange={onChange}
        className={inputClassName}
        {...rest}
      />
    </div>
  );
}

export default InputField;
