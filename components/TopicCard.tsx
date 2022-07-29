import Image from "next/image";

interface props {
  imgsrc: string;
  children: string;
}

const TopicCard: React.FC<props> = ({ children, imgsrc }) => {
  return (
    <div className="flex flex-col p-5 rounded-lg neomorphism items-center">
      <Image alt={children} src={imgsrc} width={200} height={200} />
      <h1>{children}</h1>
    </div>
  );
};

export default TopicCard;
