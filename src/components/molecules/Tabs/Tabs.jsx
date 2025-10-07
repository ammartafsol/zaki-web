"use client";

import clsx from "clsx";
import { useRef } from "react";
import classes from "./Tabs.module.css";

export default function Tabs({
  tabsOptions = [],
  selected = "",
  setSelected = () => {},
  listClass,
  containerClass,
}) {
  const tabRef = useRef(null);

  return (
    <div className={clsx(classes.container, containerClass)} ref={tabRef}>
      <ul className={classes.ul}>
        {tabsOptions?.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelected(item?.value)}
            className={clsx(
              classes.list,
              selected === item.value && classes.listSelected,
              listClass
            )}
          >
            {item.icon && <span className={classes.icon}>{item.icon}</span>}
            <span className={clsx(classes.label, "fs14  fw-500")}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
