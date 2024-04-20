/* eslint-disable react/prop-types */
export function ExercisesIndex(props) {
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <img src={exercise.image_url} alt={exercise.name} />
          <a href={exercise.video_url}></a>
        </div>
      ))}
    </div>
  );
}
