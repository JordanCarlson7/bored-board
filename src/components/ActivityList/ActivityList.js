import "./ActivityList.css";

import React, { useState } from "react";
import ActivityItem from "./ActivityItem";
import ActivityTypeFilter from "./ActivityTypeFilter";

export default function ActivityList({ activities }) {
  const [filter, setFilter] = useState("");

  const createActivityComponent = (activity) => {
    return (
      <ActivityItem
        key={activity.key}
        activityTitle={activity.activity}
        activityType={activity.type}
        participants={activity.participants}
        price={activity.price}
        accessibility={activity.accessibility}
        activityList={activity?.link}
      />
    );
  };

  return (
    <div className="activities-list-container">
      <h1>Activity List</h1>
      <div className="activities-list-container__left">
        <ActivityTypeFilter setFilter={setFilter} />
      </div>
      <div className="activities-list-container__right">
        <div className="activity-list">
          {filter !== "" &&
            activities
              .filter((activity) => activity.type === filter)
              .map((activity) => {
                return createActivityComponent(activity);
              })}
          {filter === "" &&
            activities.map((activity) => {
              return createActivityComponent(activity);
            })}
          {filter !== "" &&
            activities.filter((activity) => activity.type === filter).length === 0 &&
            <h2>:/ sorry, no available activites for #{filter}</h2>
        }
        </div>
      </div>
    </div>
  );
}
