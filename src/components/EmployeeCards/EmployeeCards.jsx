import { useState } from "react";

function EmployeeCards(props) {
  const [role, setRole] = useState(props.role);

  console.log(props);

  function clickHandler() {
    if (role === "Team Lead") {
      setRole(props.role);
    } else {
      setRole("Team Lead");
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
      <button onClick={clickHandler}> Promote</button>
    </div>
  );
}

export default EmployeeCards;
