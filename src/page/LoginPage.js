import React from "react";
import PropTypes from "prop-types";
import { login } from "../utils/api";
import { Link } from "react-router-dom";
import useInput from "../customHooks/useInput";

function LoginPage({ loginSuccess }) {
  const [email, onUserEmailHandler] = useInput("");
  const [password, onUserPasswordHandler] = useInput("");

  async function onLogin(event) {
    event.preventDefault();

    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login_page">
      <h2>Masukkan Data</h2>
      <div className="login_input">
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onUserEmailHandler}
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onUserPasswordHandler}
          />
        </div>
        <button type="button" onClick={onLogin}>
          Masuk
        </button>
      </div>
      <p>
        Belum punya akun? <Link to="register">Daftar disini</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
