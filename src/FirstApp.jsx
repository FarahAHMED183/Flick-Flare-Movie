import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function FirstApp() {
  const location = useLocation();
  const navigate = useNavigate(); // Conditional Navigation

  const [count, setCount] = useState(0);
  const [names, setNames] = useState("Farah");
  const [info, setInfo] = useState({
    name: "Hady",
    age: 19,
    city: "Minya",
    admin: true,
  });

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeName = (n) => {
    setNames(n);
  };

  const navigateLogic = () => {
    if (info.admin) {
      navigate("/");
    }
  };

  function changeCity() {
    setInfo({
      ...info,
      city: "Beni Suef",
    });
  }

  // Emulate Method in Class Component : Component Did Mount => Array of Dependencies (States) must be empty
  useEffect(() => {
    // Logic
    console.log("Component Did Mount");
  }, []);

  // Emulate Method in Class Component : Component Did Update => Array of Dependencies (States) must be filled
  useEffect(() => {
    // Logic
    console.log("Component Did Update");
  }, [info.city]);

  // Emulate Method in Class Component : Component Will Unmount => Array of Dependencies (States) must be empty

  useEffect(() => {
    return () => {
      // Logic
      console.log("Component Will Unmount");
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container text-center">
        <h1>His Name is {info.name}</h1>
        <h1> His Age is {info.age}</h1>
        <h1> His City is {info.city}</h1>
        <button className="btn btn-info" onClick={() => changeCity()}>
          Change City
        </button>

        <h1>Her name is {names}</h1>

        {info.admin && (
          <button
            className="btn btn-dark"
            onClick={() => {
              navigateLogic();
            }}
          >
            Navigate
          </button>
        )}

        <p>{count}</p>

        {info.admin ? (
          <button
            className="btn btn-danger"
            onClick={() => {
              increaseCount();
            }}
          >
            Increase
          </button>
        ) : (
          "Hello Admin"
        )}

        <div>
          <h3>Current Location Info:</h3>
          <p>Pathname: {location.pathname}</p>
          <p>Search Params: {location.search}</p>
          <p>Hash: {location.hash}</p>
          <p>Key: {location.key}</p>
          <p>State: {location.state?.message || "No message Found"}</p>
        </div>
      </div>
    </>
  );
}

export default FirstApp;

// Truthy value // let x = 3
// Falsy values

// Logical Operators
// AND => &&
// OR => ||
// NOT => !

// Conditional Rendering

// if(condition){
//   //logic if condition is true
// }else{
//   //logic if condition is false
// }

// Ternary Operator
// condition ? logic of true : logic of false
