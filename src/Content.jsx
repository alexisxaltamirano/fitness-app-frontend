import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { RoutinesNew } from "./RoutinesNew";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleCreateRoutine = (params, succesCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json").then((response) => {
      setRoutines(...routines, response.data);
      succesCallback();
    });
  };

  useEffect(handleIndexExercises, []);
  return (
    <main>
      <h1>Welcome to Swoll</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <RoutinesNew onCreateRoutine={handleCreateRoutine} />
      <ExercisesIndex exercises={exercises} />
    </main>
  );
}
