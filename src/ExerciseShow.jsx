/* eslint-disable react/prop-types */
export function ExerciseShow(props) {
  return (
    <div>
      <h1>Name: {props.exercise.name}</h1>
      <p className="card-title">Body part: {props.exercise.bodyPart}</p>
      <p className="card-text">Eqipment: {props.exercise.equipment}</p>
      <p className="card-text">Target: {props.exercise.target}</p>
      <p className="card-text">Instructions: {props.exercise.instructions}</p>
    </div>
  );
}
