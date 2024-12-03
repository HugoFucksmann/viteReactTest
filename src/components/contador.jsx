import { useEffect, useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("en useEffect 2");

    //setCount(count + 1);
    //setCount((prevState) => prevState + 1);
  }, [count]);

  return (
    <div className="card">
      <h3>Contador</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
