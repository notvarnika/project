import React from "react";

function Buttonfield({
  children,
  id,
  className,
  type = "button",
  form,
  onClick,
  title,
  ...rest
}) {
  return (
    <button
      type={type}
      id={id}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {title}
      {children}
    </button>
  );
}
export default Buttonfield;
