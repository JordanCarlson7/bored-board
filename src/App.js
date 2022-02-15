import "./App.css";
import React, { useState } from "react";
import apiCall from './API/apiCall';
import ActivityList from "./components/ActivityList/ActivityList";
import ActivityTypeFilter from "./components/ActivityList/ActivityTypeFilter";
import Form from "./components/UI/Form/Form";
import Header from './components/header/Header';

function App() {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("type");
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState([{
    activity: "Patronize a local independent restaurant",
    type: "recreational",
    participants: 1,
    price: 0.2,
    link: "",
    key: "5319204",
    accessibility: 0.1,
  }]);
  console.log('app.js', activities);

  const submitHandler = async (fetchParams, count) => {
    try {
      let newActivities = [];
      for (let i = 0; i < count; i++) {
        let activity = await apiCall(fetchParams);
        if (newActivities.some(a => a.key === activity.key)) continue;
        newActivities.push(activity);
        console.log(newActivities);
      }
      setActivities(newActivities);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Header handleShowFilterForm={setShowForm}/>
      <div className="activities-list-container">
        <div className="activities-list-container__left">
          <ActivityTypeFilter setFilter={setFilter} setFilterType={setFilterType} filterType={filterType} activities={activities}/>
          {showForm && <Form onSubmit={submitHandler} />}
        </div>
        <div className="activities-list-container__right">
          <ActivityList activities={activities} filter={filter} filterType={filterType} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
