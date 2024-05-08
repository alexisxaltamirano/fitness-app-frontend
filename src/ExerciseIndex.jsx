/* eslint-disable react/prop-types */
import { useState } from "react";

export function ExerciseIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(20);

  // Logic to paginate the exercise data
  const indexOfLastExercise = Math.min(currentPage * exercisesPerPage, props.exerciseData.length);
  const indexOfFirstExercise = Math.max(indexOfLastExercise - exercisesPerPage, 0);
  const currentExercises = props.exerciseData
    .filter((exercise) => exercise.bodyPart.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
    .slice(indexOfFirstExercise, indexOfLastExercise);

  // Logic to paginate through pages
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    props.exerciseData && (
      <div className="exercise bg-dark">
        <div className="container">
          <div className="Title">
            <h1>All Exercises</h1>
          </div>
          <input
            type="text"
            placeholder="Search by Body Part"
            className="search form-control"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
            list="bodyPart"
          />
          <datalist id="bodyPart">
            {props.exerciseData.map((exercise) => (
              <option key={exercise.id} value={exercise.name} />
            ))}
          </datalist>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {currentExercises
              .filter((exercise) => exercise.bodyPart.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
              .map((exercise) => (
                <div key={exercise.id} className="col">
                  <div className="card h-100">
                    <img src={exercise.gifUrl} className="card-img-top" />
                    <div className="card-body">
                      <h2 className="card-title">Exercise: {exercise.name}</h2>
                      <button className="btn btn-dark" onClick={() => props.onShowExercise(exercise)}>
                        More Info
                      </button>
                    </div>
                  </div>
                </div> // Adjust this line based on the structure of your response data
              ))}
          </div>

          <ul className="pagination">
            {[...Array(Math.ceil(props.exerciseData.length / exercisesPerPage)).keys()].map((pageNumber) => (
              <li key={pageNumber} className="page-item">
                <button className="page-link" onClick={() => paginate(pageNumber + 1)}>
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
