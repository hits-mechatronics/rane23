import { NextPage } from "next";
import Image from "next/image";
import Section from "../components/layouts/Section";

const Sponsor: NextPage = () => {
  return (
    <Section section="Sponsors">
      <div className="self-start flex flex-col gap-10 items-center w-full">
        <h1>this conference is brought to you by</h1>
        <div className="flex flex-row gap-5">
          <Image alt="hits" src={"/assets/hits.png"} width={600} height={100} />
          <Image alt="hits" src={"/assets/hits.png"} width={600} height={100} />
        </div>
        <h1>this conference is sponsered by</h1>
        <div className="flex flex-row gap-5">
          <Image alt="hits" src={"/assets/hits.png"} width={600} height={100} />
          <Image alt="hits" src={"/assets/hits.png"} width={600} height={100} />
          <Image alt="hits" src={"/assets/hits.png"} width={600} height={100} />
        </div>
      </div>
    </Section>
  );
};

export default Sponsor;
