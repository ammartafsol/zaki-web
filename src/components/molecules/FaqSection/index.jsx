"use client";
import React, { useState } from "react";
import classes from "./FaqSection.module.css";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import clsx from "clsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function FaqSection({ data }) {
  const [expandedItems, setExpandedItems] = useState({});

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedItems((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));
  };

  return (
    <div className={classes.faqSection}>
      <div className={classes.left}>
        <div className={classes.content}>
          <p className={clsx(classes.text, "fs13 fw-600")}>{data?.text}</p>
          <h2 className={clsx(classes.title, "fs42 fw-500")}>{data?.title}</h2>
        </div>

        <div className={classes.accordion}>
          {data?.arr.map((item, index) => {
            const isExpanded = expandedItems[index] || false;
            return (
              <Accordion
                key={index}
                className={classes.accordion}
                expanded={isExpanded}
                onChange={handleAccordionChange(index)}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowDownwardIcon
                      sx={{
                        color: isExpanded ? "#222222" : "#277F93",
                        transform: isExpanded ? "rotate(0deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  }
                  className={classes.accordionSummary}
                  sx={{
                    backgroundColor: "#F8F8F8",
                    "&.Mui-expanded": {
                      backgroundColor: "#FFFEC2",
                    },
                  }}
                >
                  <Typography component="span" className={classes.questionText}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography component="span" className={classes.answerText}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.rightImage}>
          <Image src={imageUrl(data?.icon) || data?.icon} alt="icon" fill />
        </div>
      </div>
    </div>
  );
}
