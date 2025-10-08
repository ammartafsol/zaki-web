import React from "react";
import classes from "./BoxWrapper.module.css";
import Tabs from "../Tabs/Tabs";
import clsx from "clsx";
import SearchInput from "../SearchInput";
import DropDown from "../DropDown/DropDown";
import { languageOptions } from "@/developmentContext/popover-otpions";

export default function BoxWrapper({
  children,
  showTabs,
  selectedTab,
  setSelectedTab,
  tabsOptions,
  boxWrapperClass,
  // search props
  showSearch,
  search,
  setSearch,
  // language props
  showLanguage,
  setLanguage,
  language,
  //slots props
  showSlots,
  setSlots,
  slots,
  slotsOptions,
  // category props
  showCategory,
  setCategory,
  category,
  categoryOptions,
}) {
  return (
    <div className={clsx(classes.boxWrapper, boxWrapperClass)}>
      {showTabs && (
        <Tabs
          tabsOptions={tabsOptions}
          selected={selectedTab}
          setSelected={setSelectedTab}
        />
      )}
      <div className={classes.searchWrapper}>
        {showSearch && <SearchInput setValue={setSearch} value={search} />}
        {showLanguage && (
          <DropDown
            setValue={setLanguage}
            value={language}
            options={languageOptions}
            optionLabel="label"
            indicatorColor="var(--heading-color)"
            placeholder="Language"
            optionValue="value"
            dropDownContainerClass={classes.languageDropdown}
          />
        )}
        {showSlots && (
          <DropDown
            setValue={setSlots}
            value={slots}
            options={slotsOptions}
            optionLabel="label"
            optionValue="value"
            placeholder="Slots"
            indicatorColor="var(--heading-color)"
            dropDownContainerClass={classes.languageDropdown}
          />
        )}
        {showCategory && (
          <DropDown
            setValue={setCategory}
            value={category}
            options={categoryOptions}
            optionLabel="title"
            optionValue="slug"
            placeholder="Category"
            indicatorColor="var(--heading-color)"
            dropDownContainerClass={classes.languageDropdown}
          />
        )}
      </div>

      {children}
    </div>
  );
}
