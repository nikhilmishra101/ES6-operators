import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateChanges(event) {
    const { value, name } = event.target;
    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={updateChanges}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={updateChanges}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={updateChanges}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
