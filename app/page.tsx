// Containers
import { CaseStudies, Experiences, Introduction } from "./containers/Home";
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
      <Experiences />
      <CaseStudies />
    </>
  );
};

export default Home;
