import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdClose, MdModeEdit } from "react-icons/md";
import classes from "./UploadImageBoxNew.module.css";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import clsx from "clsx";
import Button from "@/components/atoms/Button";

const UploadImageBoxNew = ({
  disabled = false,
  state,
  setValue,
  label,
  subLabel,
  edit = true,
  onClose,
  fallBackImage,
  isCloseable,
  uploadImageBox,
  containerClass = "",
  onEdit = () => {},
  acceptedType,
  error,
  uploadButtonClass,
  labelClass,
}) => {
  const inputRef = useRef(null);

  // Get file URL (local object URL or media URL)
  const fileUrl = state
    ? typeof state === "object"
      ? URL.createObjectURL(state)
      : imageUrl(state) || null
    : null;

  // Detect if file is video
  const isVideo =
    state &&
    (typeof state === "object"
      ? state?.type?.includes("video") // from File object
      : typeof state === "string" && state.toLowerCase().endsWith(".mp4")); // from string URL

  return (
    <>
      {subLabel && <label className={classes.subLabel}>{subLabel}</label>}

      <div className={`${classes.box} ${containerClass}`}>
        <div className={clsx(classes.uploadImageBox, uploadImageBox)}>
          {/* Close Icon */}
          {isCloseable && (
            <span className={classes.closeIcon} onClick={onClose}>
              <MdClose />
            </span>
          )}
          {(state?.name || (typeof state === "string" && state)) && fileUrl ? (
            <div className={classes.imageUploaded}>
              <div className={classes.photoViewSingle}>
                {isVideo && fileUrl ? (
                  <video src={fileUrl} controls className={classes.video} />
                ) : fileUrl ? (
                  <div className={classes.image}>
                    <Image src={fileUrl} alt="image" fill priority />
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div
              onClick={() => inputRef.current.click()}
              className={classes.uploadBox}
              style={disabled ? { cursor: "default" } : { cursor: "pointer" }}
            >
              <div
                className={
                  disabled ? classes.uploadIconDisabled : classes.uploadIcon
                }
              >
                {fallBackImage ? (
                  <div className={classes.imgDiv}>
                    <img src={fallBackImage} alt="fallBackImage" />
                  </div>
                ) : (
                  <IoIosAdd size={25} />
                )}
              </div>
            </div>
          )}
        </div>
        <div className={classes.labelContainer}>
          {label && (
            <label className={`${classes.label} ${subLabel && "m-0"} ${labelClass}`}>
              {label}
            </label>
          )}

          {edit && (
            <Button
              className={clsx(classes.uploadButton, uploadButtonClass)}
              label={"Upload"}
              variant="secondary"
              onClick={() => {
                inputRef.current.click();
                onEdit();
              }}
            />
          )}
        </div>

        {/* Input For Image/Video Upload */}
        <input
          disabled={disabled}
          hidden
          type="file"
          accept={acceptedType || "image/*"}
          ref={inputRef}
          onChange={(e) => setValue(e.target.files[0])}
        />
      </div>
      {error && <p className={`error`}>*{error}</p>}
    </>
  );
};

export default UploadImageBoxNew;
