import { useEffect, useState } from "react";
import moment from "moment";

interface props {
  timestamp: number;
}

const CountDown: React.FC<props> = ({ timestamp }) => {
  const [date, setDate] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const now = new Date().getTime();
    const countdown = moment(now - timestamp);

    const months = countdown.format("M");
    console.log(months);

    setDate({
      days: parseInt(countdown.format("D")),
      hours: parseInt(countdown.format("HH")),
      months: parseInt(countdown.format("M")),
    });
  }, []);

  return (
    <div className="neomorphism absolute right-0 rounded-l-3xl font-excali grid grid-flow-row p-5 gap-10 text-center auto-rows-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-permarker text-5xl">
          <span>{date.months}</span>
        </span>
        months
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-permarker text-5xl">
          <span>{date.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-permarker text-5xl">
          <span>{date.hours}</span>
        </span>
        hours
      </div>
    </div>
  );
};

export default CountDown;
