import "./App.css";
import ApiCall from "./components/API/apiCall";
import ActivityList from "./components/ActivityList/ActivityList";
import Form from './components/Home/Form';

function App() {
  let dummyActivities = [
    {
      activity: "Patronize a local independent restaurant",
      type: "recreational",
      participants: 1,
      price: 0.2,
      link: "",
      key: "5319204",
      accessibility: 0.1,
    },
    {
      activity: "Learn Express.js",
      accessibility: 0.25,
      type: "education",
      participants: 1,
      price: 0.1,
      link: "https://expressjs.com/",
      key: "3943506",
    },
    {
      activity: "Watch a movie you'd never usually watch",
      type: "relaxation",
      participants: 1,
      price: 0.15,
      link: "",
      key: "9212950",
      accessibility: 0.15,
    },
    {
      activity: "Learn origami",
      type: "education",
      participants: 1,
      price: 0.2,
      link: "",
      key: "8394738",
      accessibility: 0.3,
    },
    {
      activity: "Organize your movie collection",
      type: "busywork",
      participants: 1,
      price: 0,
      link: "",
      key: "6378359",
      accessibility: 0,
    },
    {
      activity: "Learn how to use an Arduino",
      type: "education",
      participants: 1,
      price: 0.1,
      link: "https://en.wikipedia.org/wiki/Arduino",
      key: "8264223",
      accessibility: 0.7,
    },
  ];

  const submitHandler = (fetchParams, count) => {
    console.log(fetchParams, count);
  };

  return (
    <>
    <ApiCall/>
    <Form onSubmit={submitHandler} />
    <ActivityList activities={dummyActivities} />
    </>
     );
}

export default App;
