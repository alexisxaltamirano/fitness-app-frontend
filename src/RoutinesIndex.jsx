/* eslint-disable react/prop-types */
export function RoutinesIndex(props) {
  console.log(props);
  return (
    <div>
      <h2>My Routines</h2>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.name}</h2>
          <p>{routine.exercise.name}</p>
          <p>{routine.reps}</p>
        </div>
      ))}
    </div>
  );
}
