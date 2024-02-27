// Containers
import Introduction from "./containers/Home/Introduction";
import Skills from "./containers/Home/Skills";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front-End Developer | Nicolas Milliard",
  description: "Welcome to my portfolio!",
};

const Home = () => {
  return (
    <>
      <Introduction />
      <Skills />
    </>
  );
};

export default Home;
