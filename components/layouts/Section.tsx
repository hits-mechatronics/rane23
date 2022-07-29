import type { NextPage } from "next";
import NavSpot from "../../components/NavSpot";

interface props {
  section: string;
  children: JSX.Element;
}

const Section: React.FC<props> = ({ section, children }) => {
  return (
    <>
      <div className="px-2 py-4 h-full w-full">
        <NavSpot
          content=""
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" />
            </svg>
          }
        />
        <div className="m-10 flex flex-col gap-5 items-end text-justify font-excali">
          <h1 className="font-permarker text-5xl">{section}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
