import { Route } from "../routes/counter.$counterNumber";
import { Link } from "@tanstack/react-router";


export const CounterSC = () => {
 
    const { counterNumber } = Route.useParams();

    return (
      <div className="space-y-2">
        <br />
        Valor del contador en una ruta dinamica: {counterNumber}
        <br></br>
        <Link to={`/`} >VOLVER A HOME</Link>
      </div>
    );
}
