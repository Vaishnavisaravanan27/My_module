import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        // ❗ IMPORTANT PART
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        return res.json();
      })
      .then(data => {
        localStorage.setItem("patient", JSON.stringify(data));
        window.location.href = "/dashboard";
      })
      .catch(() => {
        alert("Invalid credentials");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
