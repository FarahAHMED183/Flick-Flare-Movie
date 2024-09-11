import { useState } from "react";
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [userInfo, setInfo] = useState({
    name: "",
    mail: "",
    userName: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    mailError: "",
    userNameError: "",
    passwordError: "",
    confirmPassError: "",
  });

  const submitData = (e) => {
    e.preventDefault();
    // Add submit logic
  };

  const changeData = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setErrors({
        ...errors,
        nameError: value.length === 0 && "This field is required",
      });
    } else if (id === "mail") {
      setErrors({
        ...errors,
        mailError: value.length === 0 && "This field is required",
      });
    } else if (id === "userName") {
      setErrors({
        ...errors,
        userNameError: value.length === 0
          ? "This field is required"
          : value.includes(" ")
          ? "Username must not contain spaces"
          : "",
      });
    } else if (id === "pass") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setErrors({
        ...errors,
        passwordError: value.length === 0
          ? "This field is required"
          : !passwordRegex.test(value)
          ? "Password must be at least 8 characters, include at least one lowercase letter, one uppercase letter, one special character, and one digit."
          : "",
      });
    } else if (id === "confirmPass") {
      setInfo({
        ...userInfo,
        confirmPass: value,
      });

      setErrors({
        ...errors,
        confirmPassError: value.length === 0
          ? "This field is required"
          : value !== userInfo.password
          ? "Passwords do not match"
          : "",
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register Now!</h1>
        <form onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className={`form-control ${errors.nameError ? "error-border" : ""}`}
              placeholder="Enter your name"
              onChange={changeData}
            />
            {errors.nameError && <p className="error-message">{errors.nameError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mail" className="form-label">E-mail:</label>
            <input
              type="email"
              id="mail"
              className={`form-control ${errors.mailError ? "error-border" : ""}`}
              placeholder="Enter your email"
              onChange={changeData}
            />
            {errors.mailError && <p className="error-message">{errors.mailError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="userName" className="form-label">Username:</label>
            <input
              type="text"
              id="userName"
              className={`form-control ${errors.userNameError ? "error-border" : ""}`}
              placeholder="Enter your username"
              onChange={changeData}
            />
            {errors.userNameError && <p className="error-message">{errors.userNameError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="pass" className="form-label">Password:</label>
            <input
              type="password"
              id="pass"
              className={`form-control ${errors.passwordError ? "error-border" : ""}`}
              placeholder="Enter your password"
              onChange={changeData}
            />
            {errors.passwordError && <p className="error-message">{errors.passwordError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPass" className="form-label">Confirm Password:</label>
            <input
              type="password"
              id="confirmPass"
              className={`form-control ${errors.confirmPassError ? "error-border" : ""}`}
              placeholder="Re-enter your password"
              onChange={changeData}
            />
            {errors.confirmPassError && <p className="error-message">{errors.confirmPassError}</p>}
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={Object.values(errors).some(error => error)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
