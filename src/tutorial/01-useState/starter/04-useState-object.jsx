import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    setName("john");
    setAge(28);
    setHobby("scream at the computer");
  };
  return (
    <>
      <h4>{name}</h4>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
