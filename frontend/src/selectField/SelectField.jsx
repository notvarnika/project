import React from "react";

function SelectField({
  id,
  className,
  label,
  options = [],
  defaultValue,
  labelClassName,
  selectClassName,
  ...rest
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <select id={id} className={selectClassName} {...rest}>
        {/* Added key to defaultValue option */}
        {defaultValue && (
          <option key="default-val" value={defaultValue}>
            {defaultValue}
          </option>
        )}

        {options.map((opt, index) => {
          // Keep key fallback in case opt.value is undefined or missing in your API response
          const keyVal = opt.value ?? index;

          return (
            <option key={keyVal} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectField;
