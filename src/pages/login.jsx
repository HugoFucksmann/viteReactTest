import { useState } from "react";
import { getUser } from "../services/user";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const userLogin = { userName: user, password: password };
    const res = await getUser(userLogin);

    if (res.ok) {
      navigate("/home", { state: userLogin });
      localStorage.setItem("user", JSON.stringify(userLogin));
    } else if (res.status === 401) {
      alert("Usuario o contraseña incorrectos");
    } else {
      alert("error al login");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="loginCard"
        style={{
          border: "2px solid blue",
          padding: 12,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>LOGIN FORM</h2>
        <input
          onChange={(e) => setUser(e.target.value)}
          style={styles.inputLogin}
          placeholder="usuario"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={styles.inputLogin}
          placeholder="password"
        />
        <button onClick={() => handleLogin()}>LogIn</button>
      </div>
    </div>
  );
};

const styles = {
  inputLogin: {
    padding: 6,
    borderRadius: 8,
    marginBottom: 12,
  },
};

export default LoginPage;
