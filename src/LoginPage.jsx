import { useState } from "react";
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [loginData, setData] = useState({
    mail: "",
    password: "",
  });

  const submitData = (e) => {
    e.preventDefault();
    // Add submit logic
  };

  const [errors, setErrors] = useState({
    mailError: "",
    passwordError: "",
  });

  const changeData = (e) => {
    if (e.target.id === "pass") {
      setData({
        ...loginData,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordError: e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 8 && "Enter a password with at least 8 characters",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back!</h1>
        <form onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="mail" className="form-label">E-mail</label>
            <input
              type="email"
              className={`form-control ${errors.mailError ? "error-border" : ""}`}
              placeholder="Enter your email"
              id="mail"
            />
            <p className="error-message">{errors.mailError}</p>
          </div>

          <div className="form-group">
            <label htmlFor="pass" className="form-label">Password</label>
            <input
              onChange={(e) => changeData(e)}
              type="password"
              className={`form-control ${errors.passwordError ? "error-border" : ""}`}
              placeholder="Enter your password"
              id="pass"
            />
            <p className="error-message">{errors.passwordError}</p>
          </div>

          <button
            type="submit"
            disabled={errors.passwordError}
            className="login-button"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
