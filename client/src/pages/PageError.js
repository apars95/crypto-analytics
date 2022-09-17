import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeoplePulling } from "@fortawesome/free-solid-svg-icons";

const PageError = () => {
  return (
    <div className="pageError">
      <div className="PageError-wrapper">
        <h1>The page you're looking for can't be found.</h1>
        <FontAwesomeIcon
          className="PageError-page404Error"
          icon={faPeoplePulling}
        />
        <Link to="/">
          <button>Return to the homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default PageError;
