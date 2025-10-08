// import LoadingTemplate from "@/components/templates/LoadingTemplate";
import { LANGUAGE_OPTIONS } from "@/developmentContext/popover-otpions";
import { mergeClass } from "@/resources/utils/helper";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import classes from "./LanguageSwitcher.module.css";
 
export default function LanguageSwitcher({
  className,
  languageSwitcherClass,
  arrowIconClass,
  dropdownMenuClass,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const googleTrans = Cookies.get("googtrans");
  let oldData = null;
 
  // 🔹 On mount: check cookie and set selected language
  useEffect(() => {
    const cookieLang = Cookies.get("googtrans"); // e.g. "/en/ar"
 
    if (cookieLang) {
      const langCode = cookieLang.split("/")[2]; // extract "ar"
      const match = LANGUAGE_OPTIONS.find((opt) => opt.value === langCode);
      if (match) {
        setSelectedLanguage(match);
      }
    }
  }, []);
 
  // 🔹 Handle language change
  const handleLanguageChange = (lang) => {
    setLoading(true);
    setOpen(false);
 
    try {
      // Remove existing cookie
      Cookies.remove("googtrans", { path: "/" });
 
      // Set new cookie dynamically
      const newLangValue = `/en/${lang.value}`;
      Cookies.set("googtrans", newLangValue, {
        path: "/",
        expires: 365,
      });
 
      setSelectedLanguage(lang);
 
      // Reload required for Google Translate
      window.location.reload();
    } catch (error) {
      console.warn("Language switch error:", error);
      setLoading(false);
      window.location.reload();
    }
    setLoading(false);
    setOpen(false);
  };
 
  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
 
    document.addEventListener("mousedown", handleClickOutside);
 
    return () => {
      // Clean up event listener properly
      try {
        document.removeEventListener("mousedown", handleClickOutside);
      } catch (error) {
        console.warn("Error removing event listener:", error);
      }
    };
  }, []);
 
  return (
    <div
      className={mergeClass(className, classes.languageSwitcherWrapper)}
      ref={dropdownRef}
    >
      <div
        className={mergeClass(classes.languageSwitcher, languageSwitcherClass)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={mergeClass(classes.languageLabel, "fs-16")}
          translate="no"
        >
          {selectedLanguage?.label}
        </p>
        <IoIosArrowDown
          className={mergeClass(
            "fs-16",
            classes.arrowIcon,
            open && classes.rotate,
            arrowIconClass
          )}
        />
      </div>
 
      {open && (
        <ul className={mergeClass(classes.dropdownMenu, dropdownMenuClass)}>
          {LANGUAGE_OPTIONS.map((lang) => (
            <li
              key={lang.value}
              translate="no"
              className={mergeClass(
                classes.dropdownItem,
                selectedLanguage.value === lang.value && classes.active
              )}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
 
      {/* Loading overlay */}
      {loading && (
        <div className={classes.loadingOverlay}>
          <LoadingTemplate />
        </div>
      )}
    </div>
  );
}