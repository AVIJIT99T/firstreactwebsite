import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);

  return (
    <>
    <h1>I am User {fname} {lname} Page</h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === `/user/Avi/das` ? <button onClick={() => history.push("/about")}>Click Me</button> : null}
    </>
  );
};

export default User;