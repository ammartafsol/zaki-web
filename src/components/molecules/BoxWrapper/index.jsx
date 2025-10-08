import React from "react";
import classes from "./BoxWrapper.module.css";
import Tabs from "../Tabs/Tabs";
import clsx from "clsx";

export default function BoxWrapper({
  children,
  showTabs,
  selectedTab,
  setSelectedTab,
  tabsOptions,
  boxWrapperClass,
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
      {children}
    </div>
  );
}
