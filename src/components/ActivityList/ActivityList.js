import "./ActivityList.css";

import ActivityItem from "./ActivityItem";
// import ActivityTypeFilter from "./ActivityTypeFilter";

export default function ActivityList({ data, activities, filter, filterType, pinnedActivites, setPinnedActivites }) {

  const createActivityComponent = (activity) => {
    return (
      <ActivityItem
        activity={activity}
        pinnedActivites={pinnedActivites}
        setPinnedActivites={pinnedActivites}
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
