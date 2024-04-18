export function RoutinesNew() {
  return (
    <div>
      <h2>New Routine</h2>
      <form>
        <div>
          Routine Title: <input name="name" type="text" />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}
