import "./Pin.css";

import React, { useState } from "react";

export default function Pin({activity, pinnedActivities, setPinnedActivites}) {
  const [pinActive, setPinActive] = useState(activity?.pinned ? true : false);

  const handleClick = () => {
    if(pinActive === false){ 
      activity.pinned = true;
      setPinnedActivites([...pinnedActivities, activity]);
      setPinActive(true)
      console.log("BLEH", pinnedActivities)
    } else{ 
      setPinnedActivites(pinnedActivities.split(pinnedActivities.indexOf(activity), 1));
      activity.pinned = false;
      setPinActive(false)
    }
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
