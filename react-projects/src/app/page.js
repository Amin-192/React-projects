import Image from "next/image";
import Accordian from "./components/Accordian";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
   <>
  <Accordian/>
  <Counter/>
  <TodoList/>
   </>

  );
}
