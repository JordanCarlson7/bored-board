import './Pin.css';

import React, {useState} from "react";

export default function Pin() {

    const [pinClasses, setPinClasses] = useState();

    const handleClick = () => { 
        return;
    }

  return (
    <div className="Pin">
            <div className="pin-icon">
              <span className="pin-top"></span>
              <span className="pin-middle"></span>
              <span className="pin-bottom"></span>
            </div>
          </div>
  );
}
