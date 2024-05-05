import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-dark">
        <div className="form-container p-5 rounded bg-light">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Login</h1>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" placeholder="name@example.com" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="d-grid">
              <button className="btn btn-dark" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
