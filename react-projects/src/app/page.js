import Image from "next/image";
import Accordian from "./components/Accordian";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
   <>
  <Accordian/>
  <Counter/>
  <TodoList/>
  <ImageSlider/>
   </>

  );
}
