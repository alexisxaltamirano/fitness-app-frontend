/* eslint-disable react/prop-types */
export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onCreateRoutine(params);
    event.target.reset();
  };
  return (
    <div>
      <h2>New Routine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Routine Title: <input name="name" type="text" />
        </div>
        <div>
          Exercise:{" "}
          <select name="exercises">
            {props.exercises &&
              props.exercises.map((exercise) => (
                <option key={exercise.id} value={exercise.name}>
                  {exercise.name}
                </option>
              ))}
          </select>
          {/* <input name="exercise_id" type="integer" /> */}
        </div>
        <div>
          Reps: <input name="reps" type="integer" />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}
