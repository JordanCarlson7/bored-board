import "./ActivityList.css";

import ActivityItem from "./ActivityItem";
// import ActivityTypeFilter from "./ActivityTypeFilter";

export default function ActivityList({ data, activities, filter, filterType, pinnedActivities, setPinnedActivities }) {

  const createActivityComponent = (activity) => {
    return (
      <ActivityItem
        key={activity.activity}
        activity={activity}
        pinnedActivities={pinnedActivities}
        setPinnedActivities={setPinnedActivities}
      />
    );
  };

  return (

        <div className="activity-list">
          {filter !== "" &&
            activities
              ?.filter((activity) => activity[filterType] === filter)
              ?.map((activity) => {
                return createActivityComponent(activity);
              })}
          {filter === "" &&
            activities?.map((activity) => {
              return createActivityComponent(activity);
            })}
          {filter !== "" &&
            activities?.filter((activity) => activity[filterType] === filter).length === 0 &&
            <h2>:/ sorry, no available activites for #{filter}</h2>
        }
        </div>

  );
}
