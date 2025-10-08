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
  error,
  errorClass,
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
      minHeight: "auto",
      cursor: "pointer",
      borderRadius: 0,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      "&:hover": { border: "none" },
    }),
    valueContainer: (base) => ({ ...base, padding: 0 }),
    input: (base) => ({
      ...base,
      color: "var(--heading-color)",
      fontFamily: "var(--font-inter)",
      fontSize: "var(--fs16)",
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--heading-color)",
      fontFamily: "var(--font-inter)",
      fontSize: "var(--fs16)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--industrial-gray)",
      fontFamily: "var(--font-inter)",
      fontSize: "var(--fs16)",
    }),
    menu: (base) => ({
      ...base,
      border: "1px solid var(--border)",
      borderRadius: 6,
      overflow: "hidden",
      zIndex: 10,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--tidewater-blue)"
        : state.isFocused
        ? "var(--mint-whisper)"
        : "var(--white)",
      color: state.isSelected ? "var(--white)" : "var(--heading-color)",
      cursor: "pointer",
      fontFamily: "var(--font-inter)",
      fontSize: "var(--fs16)",
      padding: "12px 16px",
      transition: "background-color 160ms ease, color 160ms ease",
    }),
    multiValue: (base) => ({
      ...base,
      background: "var(--tidewater-blue)",
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
      {error && <p className={clsx("error")}>{error + "*"}</p>}
    </div>
  );
};

export default DropDown;
