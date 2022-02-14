import "./ActivityList.css";

import React, { useState, useContext } from "react";
import ActivityItem from "./ActivityItem";
import ActivityTypeFilter from "./ActivityTypeFilter";
import DataContext

<<<<<<< HEAD
export default function ActivityList({ activities, filter }) {
  const activities = useContext()
=======
export default function ActivityList({ data, activities, filter, filterType }) {
>>>>>>> 9136729b46bd7e63ce9b4a2e25c4630e09ee3bac

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
              .filter((activity) => activity[filterType] === filter)
              .map((activity) => {
                return createActivityComponent(activity);
              })}
          {filter === "" &&
            activities.map((activity) => {
              return createActivityComponent(activity);
            })}
          {filter !== "" &&
            activities.filter((activity) => activity[filterType] === filter).length === 0 &&
            <h2>:/ sorry, no available activites for #{filter}</h2>
        }
        </div>

  );
}
