import { NextPage } from "next";
import Section from "../components/layouts/Section";
import TopicCard from "../components/TopicCard";

const Focus: NextPage = () => {
  return (
    <Section section="focus areas">
      <div className="self-center flex flex-col gap-5 text-xl">
        <p>
          this conference accepts papers on research topics including but not
          limited to:
        </p>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <TopicCard imgsrc="/assets/robot.png">Robots</TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Intelligent Automation
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Intelligent Automotive Systems
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Automation Control Systems Methods
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Application of Robotics
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">Simulation</TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Virtual & Augmented Reality
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Sustainable Engineering & Automation
          </TopicCard>
          <TopicCard imgsrc="/assets/robot.png">
            Human Machine Interaction
          </TopicCard>
        </div>
      </div>
    </Section>
  );
};

export default Focus;
