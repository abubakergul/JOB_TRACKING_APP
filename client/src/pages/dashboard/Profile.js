import { useAppContext } from "../../context/appContext";
import { useState } from "react";
import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Profile = () => {
  const { user, displayAlert, showAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !location || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="from">
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormRow
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <FormRow
            type="text"
            name="email"
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
