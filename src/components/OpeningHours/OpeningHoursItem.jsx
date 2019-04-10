import React from "react";
import { CalendarIcon, ClockIcon, DeleteIcon } from "../../img/svg/Icons";

const OpeningHoursItem = ({
  handleInput,
  handleDays,
  handleDeleteItem,
  openingHour,
  index
}) => {
  return (
    <div className="section-opening-hours">
      <div className="opening-hours">
        <span className="text">WEEKDAYS</span>

        <div className="opening-hours-items">
          <span className="opening-hours-item weekdays no-cursor-pointer">
            <CalendarIcon icon="icon " />
          </span>
          {openingHour.days.map(day => {
            return (
              <span
                key={day.id}
                onClick={() => handleDays(openingHour.id, day.id)}
                className={
                  day.toggle
                    ? "opening-hours-item weekdays weekdays-active"
                    : "opening-hours-item weekdays"
                }
              >
                {day.day}
              </span>
            );
          })}
        </div>
      </div>
      <div className="opening-hours-time-container">
        <div className="opening-hours-time">
          <span className="text">FROM</span>
          <div className="opening-hours-items">
            <label className="opening-hours-item no-border-right time">
              <ClockIcon icon="icon" />
            </label>
            <input
              type="text"
              id="from"
              className="opening-hours-item opening-hours-input time"
              value={openingHour.from}
              onChange={e => handleInput(e, openingHour.id)}
            />
          </div>
        </div>

        <div className="opening-hours-time">
          <span className="text">TO</span>
          <div className="opening-hours-items">
            <label className="opening-hours-item no-border-right time">
              <ClockIcon icon="icon" />
            </label>
            <input
              type="text"
              id="to"
              className="opening-hours-item opening-hours-input time mr-big"
              value={openingHour.to}
              onChange={e => handleInput(e, openingHour.id)}
            />
          </div>
        </div>
      </div>
      {index > 0 ? (
        <span
          onClick={() => handleDeleteItem(openingHour.id)}
          className="ml mb-small"
        >
          <DeleteIcon icon={"icon delete-icon"} />
        </span>
      ) : null}
    </div>
  );
};

export default OpeningHoursItem;
