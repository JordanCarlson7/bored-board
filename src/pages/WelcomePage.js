import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/header/Header";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <Fragment>
      <Header
        notShowButtons={true}
      />
      <div className="container">
        <Link id="start" className="btn header" to="/main">
          Feeling Bored?
        </Link>
      </div>
    </Fragment>
  );
};
export default WelcomePage;
