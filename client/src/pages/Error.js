import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="bot found" />
        <h3>Oh page not found</h3>
        <p>We cannot find the page at the movement</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
