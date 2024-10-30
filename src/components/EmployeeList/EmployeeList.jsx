import EmployeeCards from "../EmployeeCards/EmployeeCards.jsx";

function EmployeeList() {
  return (
    <div>
      <EmployeeCards
        firstName="Thimira"
        role="Developer"
        department="IT"
        location="Helsinki"
      />
      <EmployeeCards
        firstName="Dulanja"
        role="CEO"
        department="General"
        location="Helsinki"
      />
      <EmployeeCards
        firstName="Gunawardena"
        role="CTO"
        department="General"
        location="Helsinki"
      />
      <EmployeeCards
        firstName="Dee"
        role="Accountant"
        department="Finance"
        location="Helsinki"
      />
    </div>
  );
}

export default EmployeeList;
