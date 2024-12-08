import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import LoginPage from "../pages/login";
import Home from "../pages/home";

const Navigator = () => {
  const [validUser, setValidUser] = useState("loading");

  useEffect(() => {
    const checkU = localStorage.getItem("user");

    if (checkU) {
      setValidUser(true);
    } else {
      setValidUser(false);
    }
  }, []);

  if (validUser == "loading") {
    return <div>loading...</div>;
  }

  if (!validUser) {
    return (
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" Component={LoginPage} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Navigator;
