/* eslint-disable react/prop-types */
export function ExerciseShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("helloooooo");
    const formData = new FormData(event.target);
    const exerciseId = formData.get("exercise_id");
    props.onAddToRoutine(props.routineId, exerciseId);
  };

  return (
    <div>
      <h1>Name: {props.exercise.name}</h1>
      <p className="card-title">Body part: {props.exercise.bodyPart}</p>
      <p className="card-text">Eqipment: {props.exercise.equipment}</p>
      <p className="card-text">Target: {props.exercise.target}</p>
      <p className="card-text">Instructions: {props.exercise.instructions}</p>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <input defaultValue={props.exercise.id} name="exercise_id" type="hidden" />
        </div>
        <div>
          Routine:
          <select name="routine_id">
            <option value="">Choose a Routine</option>
            {props.routines.map((routine) => (
              <option key={routine.id}>{routine.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-dark">
            Add to Routine
          </button>
        </div>
      </form> */}
    </div>
  );
}
