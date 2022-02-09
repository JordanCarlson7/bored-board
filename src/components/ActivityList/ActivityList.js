import "./ActivityList.css";

import React, { useState } from "react";
import ActivityItem from "./ActivityItem";
import ActivityTypeFilter from "./ActivityTypeFilter";

export default function ActivityList({ activities, filter }) {

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

  );
}
