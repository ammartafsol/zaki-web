import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import ReactSelect, { components } from "react-select";
import classes from "./DropDown.module.css";
import clsx from "clsx";

const DropDown = ({
  chevronIcon = false,
  options,
  label,
  customStyle,
  disabled,
  value,
  setValue,
  isFilter,
  placeholder,
  isMulti,
  style,
  leftIcon,
  errorText,
  errorTextClass,
  Components,
  labelClassName,
  indicatorColor = "var(--text-secondary)",
  optionLabel,
  optionValue,
  selectRef,
  isSearchable = true,
  borderRadius = "8px",
  classNamePrefix,
  dropDownContainerClass,
  required = false,
  dropDownContainer = "",
  menuPlacement = "auto",
  ...props
}) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.isFocused ? (
          <RiArrowDropUpLine size={24} color={indicatorColor} />
        ) : (
          <RiArrowDropDownLine size={24} color={indicatorColor} />
        )}
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 40,
      cursor: "pointer",
      borderRadius: 8,
      borderColor: state.isFocused ? "var(--primary)" : "var(--border-light)",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(47,104,250,.12)" : "none",
      backgroundColor: "var(--bg-primary)",
      "&:hover": { borderColor: "var(--gray-800)" },
    }),
    valueContainer: (base) => ({ ...base, padding: "2px 8px" }),
    input: (base) => ({ ...base, color: "var(--text-primary)" }),
    singleValue: (base) => ({ ...base, color: "var(--text-primary)" }),
    placeholder: (base) => ({ ...base, color: "var(--text-placeholder)" }),
    menu: (base) => ({
      ...base,
      border: "1px solid var(--border-light)",
      borderRadius: 8,
      overflow: "hidden",
      zIndex: 10,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--blue-graph)"
        : state.isFocused
        ? "var(--blue-bg)"
        : "var(--bg-primary)",
      color: state.isSelected ? "var(--white)" : "var(--text-primary)",
      cursor: "pointer",
    }),
    multiValue: (base) => ({
      ...base,
      background: "var(--blue-graph)",
      color: "var(--white)",
    }),
    multiValueLabel: (base) => ({ ...base, color: "var(--white)" }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <div className={clsx(classes.container, dropDownContainer)}>
      {label && (
        <label
          htmlFor={`dropdown${label}`}
          className={`${[
            classes.label,
            labelClassName,
            disabled && classes.disabled,
          ].join(" ")}`}
        >
          {label}
          {required && (
            <span style={{ color: "var(--error)", marginLeft: "2px" }}>*</span>
          )}
        </label>
      )}

      <div className={clsx(classes.dropdownContainer, dropDownContainerClass)}>
        {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
        <ReactSelect
          menuPlacement={menuPlacement}
          inputId={`dropdown${label}`}
          value={value}
          onChange={setValue}
          className={classes.reactSelect}
          isMulti={isMulti}
          isDisabled={disabled}
          placeholder={placeholder}
          options={options}
          styles={{ ...customStyles, ...style }}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
          optionLabel={optionLabel}
          optionValue={optionValue}
          getOptionLabel={(option) =>
            optionLabel ? option[optionLabel] : option.label
          }
          getOptionValue={(option) =>
            optionValue ? option[optionValue] : option.value
          }
          isClearable={false}
          isSearchable={isSearchable}
          classNamePrefix={`DropdownOptionContainer ${classNamePrefix || ""}`}
          {...props}
        />
      </div>
      {errorText && (
        <p className={clsx("errorText", errorTextClass)}>
          {errorText + "*"}
        </p>
      )}
    </div>
  );
};

export default DropDown;
