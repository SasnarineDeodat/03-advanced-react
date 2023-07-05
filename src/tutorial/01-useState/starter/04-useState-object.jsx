import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    //   setPerson({
    //     name: "john",
    //     age: 28,
    //     hobby: "scream at the computer",
    //   });
    // setPerson("shakeAndBake");
    // setPerson({ name: "susan" });
    setPerson({ ...person, name: "susan" });
  };
  return (
    <>
      <h4>{person.name}</h4>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
