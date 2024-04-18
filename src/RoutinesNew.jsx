/* eslint-disable react/prop-types */
export function RoutinesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };
  return (
    <div>
      <h2>New Routine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Routine Title: <input name="name" type="text" />
        </div>
        <div>
          Exercise: <input name="name" type="text" />
        </div>
        <div>
          Reps: <input name="name" type="text" />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}
