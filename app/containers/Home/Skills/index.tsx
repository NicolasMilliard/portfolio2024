// Components
import { SectionTitle } from "@components/Title";

const Skills = () => {
  return (
    <section className="relative">
      <div className="absolute z-20 flex w-full items-center justify-between rounded-3xl bg-white px-60 py-40 duration-100">
        <SectionTitle>Experiences</SectionTitle>
      </div>
      <div className="absolute left-0 top-0 z-10 w-full rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink px-60 py-40 blur-lg duration-100"></div>
    </section>
  );
};

export default Skills;
