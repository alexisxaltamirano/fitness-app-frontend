import Gym from "./assets/Gym.mp4";

const Video = () => {
  return (
    <div className="video">
      <div className="overlay"></div>
      <video src={Gym} autoPlay loop muted />
      <div className="content">
        <h1>SWOLL</h1>
        <h3>Elevating Your Fitness Journey, One Rep at a Time</h3>
      </div>
    </div>
  );
};

export default Video;
