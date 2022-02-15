import "./App.css";
import React, { useEffect, useState } from "react";
import { APIHandler } from './API/apiCall';
import ActivityList from "./components/ActivityList/ActivityList";
import ActivityTypeFilter from "./components/ActivityList/ActivityTypeFilter";
import Form from "./components/UI/Form/Form";
import Header from './components/header/Header';

function App() {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("type");
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState([]);
  
  // Initialize setActivities by calling submitHandler on first render
  useEffect(() => {
    const initFetch = async () => {
      await submitHandler({}, 10); // no params, 10 basic requests
    };
    initFetch();
  }, [setActivities]);

  const submitHandler = async (fetchParams, count) => {
    try {
      let newActivities = await APIHandler(fetchParams, count);
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
