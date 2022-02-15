import React from "react";
import "./ActivityItem.css";
import Pin from "../UI/Pin/Pin";

export default function ActivityItem({
  activityTitle,
  activityType,
  participants,
  price,
  accessibility,
  activityList,
}) {
  return (
    <div>
      <div className="flip">
        <div className="front">
          <h2 className="text-shadow">{activityTitle}</h2>
          <h4 className="activity-type">#{activityType}</h4>
        </div>
        <div className="back">
          <div className="back-header-container">
            <div className="back-header-container__right">
              <Pin />
            </div>
            <h3 className="back-header-container__left">{activityTitle}</h3>
          </div>
          <div className="back__spec">
            <p>Participants: {"😀".repeat(participants)}</p>
            <p>Price: {price > 0 ? "🤑".repeat(price * 10) : "FREE"}</p>
            <p>
              Accessibility: <span>{"☠️ ".repeat(accessibility * 10)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
