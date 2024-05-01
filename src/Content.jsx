import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { RoutinesIndex } from "./RoutinesIndex";
import Video from "./Video";
import { Route, Routes } from "react-router-dom";
import { ExerciseIndex } from "./ExerciseIndex";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [exerciseData, setExerciseData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises`,
        params: { search: searchQuery, limit: 20 },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExerciseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]); // Empty dependency array ensures useEffect runs only once on component mount
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const handleIndexExercises = () => {
  //   console.log("handleIndexExercises");
  //   axios.get("http://localhost:3000/exercises.json").then((response) => {
  //     console.log(response.data);
  //     setExercises(response.data);
  //   });
  // };
  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
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
        <Route path="/exercises" element={<ExerciseIndex exerciseData={exerciseData} />} />
        <Route path="/routines" element={<RoutinesIndex routines={routines} />} />
      </Routes>
    </main>
  );
}
