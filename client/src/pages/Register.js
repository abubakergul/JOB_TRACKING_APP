import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Alert, FormRow, Logo } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initalState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initalState);
  const { user, showAlert, isLoading, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    return setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    {
      alert(
        "For demo use\n email: shaktemanhatim222@gmail.com\n password: 121212 "
      );
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            name="name"
            value={values.name}
            handleChange={handleChange}
            type="type"
            className="form-input"
          />
        )}
        <FormRow
          name="email"
          value={values.email}
          handleChange={handleChange}
          type="email"
          className="form-input"
        />
        <FormRow
          name="password"
          value={values.password}
          handleChange={handleChange}
          type="password"
          className="form-input"
        />
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet" : "Already a member"}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {!values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
