import { useState } from "react";

const Controlled = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Email: ${email} password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />{" "}
      <br />
      <input
        type="password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button>Login</button>
    </form>
  );
};

export default Controlled;
