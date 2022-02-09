import React, { useState, useEffect, useCallback } from "react";
import classes from './ApiCalls.module.css'
const singleRandom = "https://www.boredapi.com/api/activity/";

function ApiCall() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let activities = [
    {
      activity: "Patronize a local independent restaurant",
      type: "recreational",
      participants: 1,
      price: 0.2,
      link: "",
      key: "5319204",
      accessibility: 0.1,
    },
  ];

  /* SINGLE RANDOM ACTIVITY CALL */
  const singleRandomHandler = useCallback(async () => {
    try {
      const response = await fetch(singleRandom);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedData = {
        activity: data.activity,
        type: data.type,
        participants: data.participants,
        price: data.price,
        link: data.link,
        key: data.key,
        accessibility: data.accessibility,
      };

      activities.push(transformedData);
      console.log(activities);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  /* MULTI RANDOM ACTIVITY CALL */
  const multiRandomHandler = () => {
    for (let i = 0; i < 40; i++) {
      singleRandomHandler();
    }
  };

  /* TEMPLATE */
  return (
    <React.Fragment>
      <section >
        <button  onClick={singleRandomHandler}>
          <span>Single</span>
          <i ></i>
        </button>
        <button  onClick={multiRandomHandler}>
          <span>Multi</span>
          <i ></i>
        </button>
        <button >
          <span>Browse Category</span>
          <i className="entypo-right-open-big"></i>
        </button>
      </section>
    </React.Fragment>
  );
}

export default ApiCall;

