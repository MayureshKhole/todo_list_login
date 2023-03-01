import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { dummydata } from "../../dummyUser";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    dummydata.filter((user) => {
      if (
        user.email === email.current.value &&
        user.password === password.current.value
      ) {
        console.log("hii");
        navigate("/home");
      }
    });

    return;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Your ToDo App</h3>
          <span className="loginDesc">Manage and priorotise your tasks...</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
