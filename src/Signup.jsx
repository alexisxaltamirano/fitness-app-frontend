import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark">
        <div className="40-w p-5 rounded bg-light">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Sign In</h1>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" placeholder="Enter Name" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" placeholder="name@example.com" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="Enter Password" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="password_confrimation">Password Confirmation</label>
              <input
                name="password_confirmation"
                type="password"
                placeholder="Re-Enter Password"
                className="form-control"
              />
            </div>
            <button className="btn btn-dark" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
