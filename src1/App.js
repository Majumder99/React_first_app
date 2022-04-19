import "./App.css";
import { useState, useEffect } from "react";
// const Person = (props) => {
//   return (
//     <div>
//       <h1>FName : {props.FName}</h1>
//       <h2>LName : {props.LName}</h2>
//       <h3>Age : {props.age}</h3>
//     </div>
//     //  <>
//     //   <h1>FName : Sourav</h1>
//     //   <h2>LName : Majumder</h2>
//     //   <h3>Age : 30</h3>
//     // </>
//   );
// };

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert("Reloded");
    // setCounter(100);
    alert("You have changed the counter to " + counter);
  }, [counter]);
  // const name = "Sourav Majumder";
  // const name = null;
  // console.log(name);
  // const isNameShowing = false;
  return (
    <div className="App">
      {/* {name ? (
        <>
          <p>This is name</p>
        </>
      ) : (
        <>
          <p>This is no name</p>
          <h1>This is real name</h1>
        </>
      )} */}
      {/* <Person FName={"Salman"} LName={"Khan"} age={28} />
      <Person FName="Gabbar" LName="Singh" age={10 + 10} /> */}
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
