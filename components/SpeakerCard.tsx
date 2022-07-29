import Image from "next/image";

interface props {
  imgsrc: string;
  name: string;
  univ: string;
}

const TopicCard: React.FC<props> = ({ name, univ, imgsrc }) => {
  return (
    <div className="flex flex-row px-6 py-4 w-[600px] neomorphism items-center gap-10">
      <Image
        className="rounded-full"
        alt={name}
        src={imgsrc}
        width={100}
        height={100}
      />
      <div>
        <h1 className="font-permarker">{name}</h1>
        <h2>{univ}</h2>
      </div>
    </div>
  );
};

export default TopicCard;
