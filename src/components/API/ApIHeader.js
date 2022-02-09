import React from "react";
import classes from './ApiCalls.module.css'

function ApiHeader(props) {
  
  /* TEMPLATE */
  return (
    <React.Fragment>
      <section >
        <button onClick={props.singleRandomHandler}>
          <span>Single</span>
          <i></i>
        </button>
        <button  onClick={props.multiRandomHandler}>
          <span>Multi</span>
          <i></i>
        </button>
        <button >
          <span>Browse Category</span>
          <i className="entypo-right-open-big"></i>
        </button>
      </section>
    </React.Fragment>
  );
}

export default ApiHeader;


{/* <ApiHeader
        singleRandomHandler={singleRandomHandler}
        multiRandomHandler={multiRandomHandler}
      /> */}