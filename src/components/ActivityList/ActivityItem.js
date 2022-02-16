import React from "react";
import "./ActivityItem.css";
import Pin from "../UI/Pin/Pin";

export default function ActivityItem({
  activity,
  pinnedActivities,
  setPinnedActivities
}) {
  return (
    <div>
      <div className="flip">
        <div className="front">
          <h2 className="text-shadow">{activity.activity}</h2>
          <h4 className="activity-type">#{activity.type}</h4>
        </div>
        <div className="back">
          <div className="back-header-container">
            <div className="back-header-container__right">
              <Pin activity={activity} pinnedActivities={pinnedActivities} setPinnedActivities={setPinnedActivities}/>
            </div>
            <h3 className="back-header-container__left">{activity.activity}</h3>
          </div>
          <div className="back__spec">
            <p>Participants: {"😀".repeat(activity.participants)}</p>
            <p>Price: {activity.price > 0 ? "🤑".repeat(activity.price * 10) : "FREE"}</p>
            <p>
              Accessibility: <span>{"☠️ ".repeat(activity.accessibility * 10)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
