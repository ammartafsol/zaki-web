import React from "react";
import classes from "./BoxWrapper.module.css";
import Tabs from "../Tabs/Tabs";

export default function BoxWrapper({
  children,
  showTabs,
  selectedTab,
  setSelectedTab,
  tabsOptions,
}) {
  return (
    <div className={classes.boxWrapper}>
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
