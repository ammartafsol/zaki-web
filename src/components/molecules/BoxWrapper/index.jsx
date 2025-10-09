import React from "react";
import classes from "./BoxWrapper.module.css";
import Tabs from "../Tabs/Tabs";
import clsx from "clsx";
import SearchInput from "../SearchInput";
import DropDown from "../DropDown/DropDown";
import { languageOptions } from "@/developmentContext/popover-otpions";
import PricePopover from "../PricePopover";
import DatePickerPopover from "../DatePickerPopover";

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
  searchInputClass,
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
  // location props
  showLocation,
  setLocation,
  location,
  locationOptions,
  // price props
  showPrice,
  setPrice,
  // date props
  showDatePicker,
  setDate,
  date,
}) {
  return (
    <div className={clsx(classes.boxWrapper, boxWrapperClass)}>
      <div className={classes.boxWrapperHeader}>
        {/* tabs props */}
        {showTabs && (
          <Tabs
            tabsOptions={tabsOptions}
            selected={selectedTab}
            setSelected={setSelectedTab}
          />
        )}
        <div
          className={clsx(
            classes.searchWrapper,
            showTabs && classes.searchWrapperTabs
          )}
        >
          {showSearch && (
            <SearchInput
              setValue={setSearch}
              value={search}
              className={clsx(searchInputClass, classes.searchInput)}
              placeholder="Search"
            />
          )}
          {showLanguage && (
            <DropDown
              placeholderStyle={{
                color: "var(--heading-color)",
                fontWeight: "500",
              }}
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
              placeholderStyle={{
                color: "var(--heading-color)",
                fontWeight: "500",
              }}
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
              placeholderStyle={{
                color: "var(--heading-color)",
                fontWeight: "500",
              }}
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

          {showLocation && (
            <DropDown
              placeholderStyle={{
                color: "var(--heading-color)",
                fontWeight: "500",
              }}
              setValue={setLocation}
              value={location}
              options={locationOptions}
              optionLabel="title"
              optionValue="slug"
              placeholder="Location"
              indicatorColor="var(--heading-color)"
              dropDownContainerClass={classes.languageDropdown}
            />
          )}
          {showPrice && <PricePopover onApply={setPrice} />}
          {showDatePicker && (
            <DatePickerPopover setDate={setDate} date={date} />
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
