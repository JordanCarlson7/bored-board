import "./App.css";
import { useState, createContext, useContext } from "react";
import ApiCall from "./components/API/apiCall";
import ActivityList from "./components/ActivityList/ActivityList";
import ActivityTypeFilter from "./components/ActivityList/ActivityTypeFilter";
import Form from "./components/UI/Form/Form";

const DataContext = createContext();

function App() {
  const [filter, setFilter] = useState("");
  const [activities, setActivities] = useState([{
    activity: "Patronize a local independent restaurant",
    type: "recreational",
    participants: 1,
    price: 0.2,
    link: "",
    key: "5319204",
    accessibility: 0.1,
  }]);
  console.log('app.js', activities)

  const submitHandler = (fetchParams, count) => {
    console.log(fetchParams, count);
  };

  return (
    <DataContext.Provider value={activities}>
      <div className="activities-list-container">
        <h1>Activity List</h1>
        <div className="activities-list-container__left">
          <ActivityTypeFilter setFilter={setFilter} setFilterType={setFilterType} filterType={filterType} activities={dummyActivities}/>
        </div>
        <div className="activities-list-container__right">
<<<<<<< HEAD
          <ActivityList activities={activities} filter={filter} />
          <Form onSubmit={submitHandler} state={activities} setState={setActivities} />
=======
          <ActivityList activities={dummyActivities} filter={filter} filterType={filterType}/>
          <Form onSubmit={submitHandler} />
>>>>>>> 9136729b46bd7e63ce9b4a2e25c4630e09ee3bac
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
