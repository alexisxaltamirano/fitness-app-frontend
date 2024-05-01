import { RoutinesNew } from "./RoutinesNew";
import axios from "axios";
import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export function RoutinesIndex(props) {
  console.log(props);
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleCreateRoutine = (params) => {
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      setRoutines([...routines, response.data]);
    });
  };
  useEffect(handleIndexExercises, []);

  return (
    <div>
      <RoutinesNew onCreateRoutine={handleCreateRoutine} exercises={exercises} />
      <h2>My Routines</h2>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.name}</h2>
          <ul>
            {routine.exercises.map((exercise) => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
          <button>Add exercise to this routine</button>
        </div>
      ))}
    </div>
  );
}
