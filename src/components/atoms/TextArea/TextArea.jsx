import { mergeClass } from "@/resources/utils/helper";
import classes from "./TextArea.module.css";
import React from "react";

export default function TextArea({
  value = "",
  setValue = () => {},
  label = "",
  placeholder = "",
  customStyle = {},
  labelStyle = {},
  rows = 3,
  className = "",
  containerClass = "",
  disabled = false,
  labelClass = "",
  error = "",
  children,
  ...props
}) {
  return (
    <div className={mergeClass(classes.container, containerClass)}>
      {label && (
        <label
          htmlFor={`text-area-${label}`}
          style={{ ...labelStyle }}
          className={mergeClass(classes.label, labelClass)}
        >
          {label}
        </label>
      )}
      <textarea
        id={`text-area-${label}`}
        placeholder={placeholder}
        value={value}
        style={customStyle}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setValue(value?.trim());
        }}
        className={className}
        rows={rows}
        disabled={disabled}
        {...props}
      />
      {error && (
        <p className={mergeClass("error")}>{`*${error}`}</p>
      )}
      {children}
    </div>
  );
}
