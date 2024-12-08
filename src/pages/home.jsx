/* eslint-disable react/prop-types */
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Contador } from "../components/contador";
import { ColoContainer } from "../components/coloContainer";
import { Footer } from "../components/footer";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(state);

    if (state == null || typeof state !== "object") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <ViteComp user={state} />
      <Contador />
      <Footer />
    </>
  );
};

const ViteComp = ({ user }) => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + {user && typeof user == "object" ? user.userName : "no user"}
      </h1>
    </>
  );
};

export default Home;
