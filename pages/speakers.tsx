import { NextPage } from "next";
import Section from "../components/layouts/Section";
import Speaker from "../components/SpeakerCard";

const Focus: NextPage = () => {
  return (
    <Section section="speakers">
      <div className="self-start flex flex-col gap-5 text-xl">
        <p>this conference includes talks from various prominent lecturers:</p>
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          <Speaker imgsrc="/assets/robot.png" name="Mr. A" univ="Univ X" />
          <Speaker imgsrc="/assets/robot.png" name="Mr. A" univ="Univ X" />
          <Speaker imgsrc="/assets/robot.png" name="Mr. A" univ="Univ X" />
          <Speaker imgsrc="/assets/robot.png" name="Mr. A" univ="Univ X" />
        </div>
      </div>
    </Section>
  );
};

export default Focus;
