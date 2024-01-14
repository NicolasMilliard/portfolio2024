// Components
import Heading from "./components/homepage/heading";
import BackgroundVideo from "./components/homepage/background_video";

const Home = () => {
  const smokeVideo = "videos/smoke.mp4";
  return (
    <main>
      <Heading />
      <BackgroundVideo videoPath={smokeVideo} />
      <p>test</p>
    </main>
  );
};

export default Home;
