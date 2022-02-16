import "./App.css";
import React, { useEffect, useState } from "react";
import { APIHandler } from "./API/apiCall";
import ActivityList from "./components/ActivityList/ActivityList";
import ActivityTypeFilter from "./components/ActivityList/ActivityTypeFilter";
import Form from "./components/UI/Form/Form";

import Header from './components/header/Header';
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("type");
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [pinnedActivites, setPinnedActivites] = useState([]);

  // Initialize setActivities by calling submitHandler on first render
  useEffect(() => {
    const initFetch = async () => {
      await submitHandler({}, 10); // no params, 10 basic requests
    };
    initFetch();
  }, [setActivities]);

  const submitHandler = async (fetchParams, count) => {
    setActivities([]);
    setIsLoading(true);
    try {
      let newActivities = await APIHandler(fetchParams, count);
      setActivities(newActivities);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Header handleShowFilterForm={() => { setShowForm(!showForm); }}/>
      <div className="activities-list-container">
        <div className="activities-list-container__left">
          {!showForm && <ActivityTypeFilter
            setFilter={setFilter}
            setFilterType={setFilterType}
            filterType={filterType}
            activities={activities}
          />}
          {showForm && <Form onSubmit={submitHandler} />}
        </div>
        <div className="activities-list-container__right">
        {isLoading && <Spinner />}
          <ActivityList
            activities={activities}
            filter={filter}
            filterType={filterType}
            pinnedActivites={pinnedActivites}
            setPinnedActivites={setPinnedActivites}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
