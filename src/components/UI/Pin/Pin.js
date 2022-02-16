import "./Pin.css";

import React, { useState } from "react";

export default function Pin({activity, pinnedActivities, setPinnedActivities}) {
  const [pinActive, setPinActive] = useState(activity?.pinned ? true : false);
  const [index, setIndex] = useState();

  const handleClick = () => {
    if(pinActive === false){ 
      activity.pinned = true;
      setPinActive(true)
      setPinnedActivities([...pinnedActivities, activity]);
    } else{ 
      activity.pinned = false;
      console.log(pinnedActivities.indexOf(activity), activity)
      setPinActive(false)
      setPinnedActivities(pinnedActivities.splice(pinnedActivities.indexOf(activity), 1));
    }
    console.log(pinnedActivities)
  };

  return (
    <div className="pin" onClick={() => {handleClick()}}>
      {!pinActive && 
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-pin-map-pin-flatart-icons-outline-flatarticons.png" />
      }
      {pinActive && <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/d8de85/external-pin-map-pin-flatart-icons-outline-flatarticons.png"/>}
    </div>
  );
}
