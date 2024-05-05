import React from "react";

const Pagination = ({ exercisesPerPage, totalExercises }) => {
  const pageNumbers = [];
  console.log(totalExercises);

  for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
