import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../customHooks/useInput";
import { register } from "../utils/api";

function RegisterPage() {
  const [name, onNameUserChange] = useInput("");
  const [email, onEmailUserChange] = useInput("");
  const [password, onPasswordUserChange] = useInput("");
  const navigate = useNavigate();

  async function onSubmitUserHandler(event) {
    event.preventDefault();

    const { error } = await register({
      name: name,
      email: email,
      password: password,
    });
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register_page">
      <h2>Registration</h2>
      <div className="register_input">
        <div className="input-block">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={onNameUserChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={onEmailUserChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordUserChange}
          />
        </div>
        <button type="button" onClick={onSubmitUserHandler}>
          Register
        </button>
      </div>
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
