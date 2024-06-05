import { useState } from "react";
import { Link } from "@tanstack/react-router";
// import { useLocation } from '@tanstack/react-router';

export const Home = () => {
  const [counter, setCounter] = useState<number>(2);

  // const location = useLocation();

  // console.log('Current location:', location.current);
  // console.log('Previous location:', location.previous);

  return (
    <div>
      {" "}
      <h2>Home SCREEN</h2>
      <br></br>
      ?
      <br></br>
      <br></br>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <br></br>
      <br></br>
      <Link to={`/counter/${counter}`}>VISUALIZAR CONTADOR EN RUTA DIFERENTE</Link>
    </div>
  );
};
