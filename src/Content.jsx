import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { RoutinesNew } from "./RoutinesNew";
import { RoutinesIndex } from "./RoutinesIndex";

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
  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleCreateRoutine = (params) => {
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      setRoutines([...routines, response.data]);
    });
  };

  useEffect(handleIndexExercises, []);
  useEffect(handleIndexRoutines, []);
  return (
    <main>
      <Signup />
      <Login />
      <LogoutLink />
      <RoutinesNew onCreateRoutine={handleCreateRoutine} exercises={exercises} />
      <RoutinesIndex routines={routines} />
      <ExercisesIndex exercises={exercises} />
    </main>
  );
}
