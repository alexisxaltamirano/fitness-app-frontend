/* eslint-disable react/prop-types */
import { useState } from "react";

export function ExerciseIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  const handleExerciseSelection = (exercise) => {
    props.onExerciseSelect(exercise);
  };

  return (
    props.exerciseData && (
      <div>
        <h1>All Exercises</h1>
        <h4>Search Filter:</h4>{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="name" />
        <datalist id="names">
          {props.exerciseData.map((exercise) => (
            <option key={exercise.id} value={exercise.name} />
          ))}
        </datalist>
        <div className="row row-cols-1 row-cols-md-3">
          {props.exerciseData
            .filter((exercise) => exercise.name.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
            .map((exercise) => (
              <div key={exercise.id}>
                <div className="card" style={{ width: "30rem" }}>
                  <img src={exercise.gifUrl} className="card-img-top" />
                  <div className="card-body">
                    <h2 className="card-title">Exercise: {exercise.name}</h2>
                    <p className="card-title">Body part: {exercise.bodyPart}</p>
                    <p className="card-text">Eqipment: {exercise.equipment}</p>
                    <p className="card-text">Target: {exercise.target}</p>

                    <button onClick={() => props.onShowExercise(exercise)}>Add exercise to a Routine</button>
                  </div>
                </div>
              </div> // Adjust this line based on the structure of your response data
            ))}
        </div>
      </div>
    )
  );
}
