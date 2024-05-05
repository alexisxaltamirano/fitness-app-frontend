/* eslint-disable react/prop-types */
export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onCreateRoutine(params);
    event.target.reset();
    window.location.href = "/exercises";
  };
  return (
    <div>
      <h2>New Routine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Routine Title: <input className="form-control form-control-sm" name="name" type="text" />
        </div>
        <div>
          Reps: <input className="form-control form-control-sm" name="reps" type="integer" />
        </div>
        <button className="btn btn-dark" type="submit">
          Add exercises
        </button>
      </form>
    </div>
  );
}
