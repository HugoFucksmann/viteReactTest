/* eslint-disable react/prop-types */
import { HeaderNav } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { getUser } from "../services/user";

export const ColoContainer = ({ children }) => {
  const [user, setUser] = useState("loading");
  async function handleUser() {
    const userFromBackend = await getUser();
    setUser(userFromBackend);
  }

  useEffect(() => {
    handleUser();
    console.log("en useEffect");
  }, []);

  if (user == "loading") {
    return <div>loading...</div>;
  } else if (!user) {
    window.location.href = "/";
  }

  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  );
};
