import { useState, useEffect } from "react";
import axios from "axios";
export function RoutinesIndex() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  useEffect(() => {
    // Fetch exercises on component mount
    axios
      .get("http://localhost:3000/exercises.json")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exercises:", error);
      });
  }, []);
  const handleCreateRoutine = () => {
    // Assuming selected exercises are stored in selectedExercises state
    const routineExercises = selectedExercises.map((exercise) => ({
      routine_id: 1,
      exercise_id: exercise.id,
    }));
    // Create routine exercises
    axios
      .post("http://localhost:3000/routine_exercises.json", routineExercises)
      .then((response) => {
        // Update routines state with the newly created routine exercises
        setRoutines([...routines, response.data]);
      })
      .catch((error) => {
        console.error("Error creating routine exercises:", error);
      });
  };
  const handleExerciseSelection = (exercise) => {
    setSelectedExercises((prevSelected) => {
      const isSelected = prevSelected.some((selected) => selected.id === exercise.id);
      if (isSelected) {
        return prevSelected.filter((selected) => selected.id !== exercise.id);
      } else {
        return [...prevSelected, exercise];
      }
    });
  };
  return (
    <div>
      <h2>Select Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} onClick={() => handleExerciseSelection(exercise)}>
            {exercise.name}
          </li>
        ))}
      </ul>
      <button onClick={handleCreateRoutine}>Create Routine</button>
    </div>
  );
}
