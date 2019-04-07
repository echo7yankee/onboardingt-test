import React from "react";
import { AddIcon, BackArrowIcon, NextArrowIcon } from "../../img/svg/Icons";
import "./OpeningHours.css";
import OpeningHoursItem from "./OpeningHoursItem";

const OpeningHours = ({
  handleInput,
  handleDays,
  handleMessage,
  message,
  addOpeningHours,
  openingHours,
  maxLimit
}) => {
  return (
    <>
      {openingHours.map((openingHour, index) => {
        return (
          <OpeningHoursItem
            index={index}
            key={openingHour.id}
            openingHour={openingHour}
            handleInput={handleInput}
            handleDays={handleDays}
          />
        );
      })}

      <div className="section-add-opening-hours">
        <button
          type="button"
          onClick={addOpeningHours}
          className="add-opening-hours-btn"
        >
          <span>
            <AddIcon icon="icon icon-blue" />
          </span>
          ADD OPENING HOURS
        </button>
      </div>

      <div className="section-additional-info">
        <label htmlFor="textarea" className="text">
          ADDITIONAL INFORMATION REGARDING OPENING HOURS
        </label>
        <textarea
          placeholder="Not open on Christmas day"
          id="textarea"
          maxLength={230}
          className="additional-info-textarea"
          value={message}
          onChange={handleMessage}
        />
        <div className="align-right">
          <span className="text">{maxLimit} remaining character(s)</span>
        </div>
      </div>

      <div className="section-forward">
        <button type="button" className="section-forward-btn btn-back">
          <span>
            <BackArrowIcon icon="icon icon-blue" />
          </span>
          BACK
        </button>
        <button type="submit" className="section-forward-btn btn-next">
          NEXT
          <span>
            <NextArrowIcon icon="icon icon-white icon-ml" />
          </span>
        </button>
      </div>
    </>
  );
};

export default OpeningHours;
