import Router from "next/router";
import { ReactElement } from "react";

interface props {
  content: string;
  icon?: ReactElement<SVGElement>;
}
const NavSpot: React.FC<props> = ({ content, icon }) => {
  return (
    <div
      className="m-2 p-4 w-fit animate-pulse hover:animate-none flex rounded-full justify-center items-center font-excali neomorphism hover:bg-black hover:cursor-pointer hover:font-bold"
      onClick={() => {
        Router.push("/" + content);
      }}
    >
      {icon ? <>{icon}</> : content}
    </div>
  );
};

export default NavSpot;
