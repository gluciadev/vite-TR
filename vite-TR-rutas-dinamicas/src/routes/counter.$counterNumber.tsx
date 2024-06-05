import { createFileRoute } from "@tanstack/react-router";
import { CounterSC } from "../screens/CounterSC";

export const Route = createFileRoute("/counter/$counterNumber")({
  component: ()=><CounterSC></CounterSC>,
});

