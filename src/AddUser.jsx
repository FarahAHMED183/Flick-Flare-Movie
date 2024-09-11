import { useState } from "react";
import Header from "./Header";

import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    position: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    positionError: "",
  });

  const submitData = (e) => {
    e.preventDefault();
  };

  const changeData = (e) => {
    // console.log(e.target.value);
    if (e.target.id == "name") {
      setData({
        ...data,
        name: e.target.value,
      });

      setErrors({
        ...errors,
        nameError:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length < 3 &&
              "Please, enter more than 3 characters name",
      });
      console.log(data);
    } else {
      setData({
        ...data,
        position: e.target.value,
      });
      setErrors({
        ...errors,
        positionError: e.target.value.length == 0 && "This Field is Required",
      });
      console.log(data);
    }
  };

  return (
    <div className="container">
      <Header />
      <h1 className="text-primary text-center">Add User</h1>
      <form
        onSubmit={(event) => {
          submitData(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              changeData(e);
            }}
            type="text"
            className={`form-control ${errors.nameError && "border-danger"}`}
            id="name"
            name="name"
          />
          <p className="text-danger">{errors.nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            onChange={(e) => {
              changeData(e);
            }}
            type="text"
            className={`form-control ${
              errors.positionError && "border-danger"
            }`}
            id="position"
            name="position"
          />
          <p className="text-danger">{errors.positionError}</p>
        </div>
        <button
          disabled={errors.positionError || errors.nameError}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => {
          navigate("/app", { state: { message: "Hello from Home!" } });
        }}
      >
        Navigate
      </button>
    </div>
  );
};

export default AddUser;
