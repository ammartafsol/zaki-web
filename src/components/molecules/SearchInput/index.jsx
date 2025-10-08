import Input from "@/components/atoms/Input/Input";
import Image from "next/image";
import classes from "./SearchInput.module.css";

export default function SearchInput({
  value,
  setValue,
  placeholder = "Search",
  ...props
}) {
  return (
    <div>
      <Input
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        rightIcon={
          <div className={classes.searchIcon}>
            <Image src="/svgs/search-icon.svg" alt="search" fill />
          </div>
        }
        containerClass={classes.searchInput}
        {...props}
      />
    </div>
  );
}
