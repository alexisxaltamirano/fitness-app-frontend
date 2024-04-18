import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);
  return (
    <main>
      <h1>Welcome to Swoll</h1>
      <Signup />
      <Login />
      <ExercisesIndex exercises={exercises} />
    </main>
  );
}
