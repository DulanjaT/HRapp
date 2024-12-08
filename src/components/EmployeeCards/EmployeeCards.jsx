import { useState } from "react";

function EmployeeCards(props) {
  const [role, setRole] = useState(props.role);

  const [buttonName, setbuttonName] = useState("Promote");

  function clickHandler() {
    if (role === "Team Lead") {
      setRole(props.role);
      setbuttonName("Promote");
    } else {
      setRole("Team Lead");
      setbuttonName("Demote");
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <h2> Name:{props.firstName} </h2>
      <h3> Role:{role} </h3>
      <p> Department:{props.department} </p>
      <p> StartDate:{props.startDate} </p>
      <p> Location:{props.location} </p>
      <button onClick={clickHandler}> {buttonName} </button>
    </div>
  );
}

export default EmployeeCards;
