import { useEffect, useState } from "react";
import moment from "moment";

function GraduationTimer({ graduationDate }) {
  const [timeDelta, setTimeDelta] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const graduationMoment = moment(graduationDate);
      const diff = now.diff(graduationMoment);
      const duration = moment.duration(diff);
      setTimeDelta(duration);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [graduationDate]);

  if (!timeDelta) {
    return <span>Calculating...</span>;
  }

  const years = timeDelta.years();
  const days = Math.floor(timeDelta.asDays());
  const hours = timeDelta.hours();
  const minutes = timeDelta.minutes();
  const seconds = timeDelta.seconds();

  return (
    <span>
      {years} years, {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
}

export default GraduationTimer;
