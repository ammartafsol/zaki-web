import { isValidNumber, parsePhoneNumberFromString } from "libphonenumber-js";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import classes from "./PhoneInput.module.css"; // Import the CSS Module
import clsx from "clsx";

const CustomPhoneInput = ({
  value,
  setValue,
  label,
  errorText,
  labelStyle = {},
  disabled = false,
  containerClass = "",
  inputClass = "",
}) => {
  const [error, setError] = useState("");
  const showError = errorText || error;
  const handlePhoneChange = (phone) => {
    const phoneNumberObj = parsePhoneNumberFromString(`+${phone}`);
    if (phoneNumberObj !== undefined && phoneNumberObj?.country) {
      const isValid = isValidNumber(
        phoneNumberObj.number,
        phoneNumberObj?.country
      );
      setValue({
        callingCode: phoneNumberObj.countryCallingCode,
        phoneNumber: phoneNumberObj.nationalNumber,
      });
      if (!isValid) {
        setError("Invalid phone number");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  };

  return (
    <div className={clsx(classes.container, containerClass)}>
      {label && (
        <label
          style={{ ...labelStyle }}
          className={`${[classes.label, disabled && classes.labelDisabled].join(
            " "
          )}`}
        >
          {label}
        </label>
      )}
      <PhoneInput
        country={"us"}
        value={value}
        onChange={handlePhoneChange}
        specialLabel=""
        containerClass={clsx(classes.phoneContainer, inputClass)}
      />
      {showError && <p className={`${classes.errorText}`}>{showError}</p>}
    </div>
  );
};

export default CustomPhoneInput;
