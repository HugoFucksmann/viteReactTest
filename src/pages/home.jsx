/* eslint-disable react/prop-types */
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Contador } from "../components/contador";
import { ColoContainer } from "../components/coloContainer";

const Home = () => {
  return (
    <ColoContainer>
      <ViteComp />
      <Contador />
    </ColoContainer>
  );
};

const ViteComp = ({ user = { userName: "valor defecto" } }) => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + {user.userName}</h1>
    </>
  );
};

export default Home;
