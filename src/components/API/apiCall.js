import React, { useState, useEffect, useCallback } from "react";


function ApiCall () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // could also be async and await to replace .then's.
  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.boredapi.com/api/activity/"
      );
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
        accessibility: data.accessibility 
        };
    
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch </button>
      </section>
      <section>
     
      </section>
    </React.Fragment>
  );
  }



export default ApiCall;
