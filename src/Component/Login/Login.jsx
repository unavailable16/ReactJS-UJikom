import React, { useRef, useState, useEffect } from "react";
import { globalAPI } from "../API_handler/globalAPI";
import { useNavigate, NavLink } from "react-router-dom";
import { useLogin } from "../LoginContext"; // Import useLogin hook
import "./Login.css";

const Login = () => {
  const [allUsers, setAllUsers] = useState([]);
  const formRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await globalAPI.get(); // Assuming getUsers() fetches all users from JSON Server
        setAllUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const submit = (e) => {
  e.preventDefault();

  const form = formRef.current;
  if (!form.checkValidity()) {
    // If the form is invalid, show the required message
    form.reportValidity();
    return;
  }

  const {
    [0]: usernameField,
    [1]: passField,
    [2]: tipeField,
  } = formRef.current;
  const username = usernameField.value;
  const pass = passField.value;
  const tipe = tipeField.value;

  const matchedUser = allUsers.find(
    (user) =>
      user.username === username && user.pass === pass && user.tipe === tipe
  );

  if (isLoggedIn) {
    <p>Youre Already LoggedIn</p>
    navigate("/home");
  }

  if (matchedUser) {
    // Set user as logged in or perform any other actions
    localStorage.setItem("username", username);
    localStorage.setItem("tipe", tipe);
    navigate("/home"); // Redirect user to the home page upon successful login
    window.location.reload()
  } else {
    setError("Invalid username, password, or account type");
  }
};

if (isLoggedIn) {
  <p>Youre Already LoggedIn</p>
  navigate("/home");
}


  return (
    <div className="container-login">
      <div className="center">
        {/* Retain the center class */}
        <div className="bold-text">Login</div>
        <form ref={formRef}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="txt_field">
            <input
              type="text"
              name="username"
              id="username"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Harap Masukan Username!")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="pass"
              id="password"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Harap Masukan Password!")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <select
              name="tipe"
              style={{ border: "none" }}
              className="form-control"
              required
            >
              <option defaultValue={true} selected hidden disabled>
              </option>
              <option value="admin" style={{ color: "black" }}>
                Admin
              </option>
              <option value="user" style={{ color: "black" }}>
                User
              </option>
            </select>
            <label htmlFor="tipe">Account Type</label>
          </div>
          <span>
            <button
              onClick={submit}
              className="btnlogin"
              type="submit"
              name="submit"
            >
              Login
            </button>
          </span>
        </form>
        <div className="signup_link">
          Don't Have an Account ? <NavLink to="/sign">Register</NavLink> Now
        </div>
        <h6 className="pass">
          <a href="https://www.youtube.com/c/AHDHAN16Bruh">
            © 2024 Ahdhan Setya Ananta XII RPL
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Login;
