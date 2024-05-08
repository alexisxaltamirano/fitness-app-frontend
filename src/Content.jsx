import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { RoutinesIndex } from "./RoutinesIndex";
import Video from "./Video";
import { Route, Routes } from "react-router-dom";
import { ExerciseIndex } from "./ExerciseIndex";
import { Modal } from "./Modal";
import { ExerciseShow } from "./ExerciseShow";
// import exerciseCategory from "./ExerciseCategory";

export function Content() {
  const [exercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [searchQuery] = useState("");
  const [isExerciseShowVisible, setIsExerciseShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
          params: { search: searchQuery, limit: 1000 },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        });
        setExerciseData(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
  }, [searchQuery]);
  // Empty dependency array ensures useEffect runs only once on component mount

  // // get current exercise
  // const indexOfLastExercise = currentPage * exercisesPerPage;
  // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // // change Page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleShowExercise = (exercise) => {
    console.log("handleShowExercise", exercise);
    setIsExerciseShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsExerciseShowVisible(false);
  };

  const handleAddExerciseToRoutine = (routineId, exerciseId) => {
    const selectedRoutine = routines.find((routine) => routine.id === routineId);
    if (selectedRoutine) {
      const isExerciseAlreadyAdded = selectedRoutine.exercises.some((exercise) => exercise.id === exerciseId);
      if (!isExerciseAlreadyAdded) {
        const exerciseDetails = exercises.find((exercise) => exercise.id === exerciseId);
        if (exerciseDetails) {
          const updatedRoutine = { ...selectedRoutine };
          updatedRoutine.exercises.push({ id: exerciseId, name: exerciseDetails.name });
          setRoutines((prevRoutines) =>
            prevRoutines.map((routine) => (routine.id === routineId ? updatedRoutine : routine))
          );
        }
        console.log("Adding exercise", exerciseId, "to routine", routineId);
      }
    }
  };

  // useEffect(handleIndexExercises, []);
  useEffect(handleIndexRoutines, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<LogoutLink />} />
        <Route
          path="/exercises"
          element={<ExerciseIndex exerciseData={exerciseData} onShowExercise={handleShowExercise} />}
        />
        <Route path="/routines" element={<RoutinesIndex routines={routines} />} />
      </Routes>
      <Modal show={isExerciseShowVisible} onClose={handleClose}>
        <ExerciseShow
          exercise={currentExercise}
          routines={routines}
          onAddExerciseToRoutine={handleAddExerciseToRoutine}
        />
      </Modal>
    </main>
  );
}
