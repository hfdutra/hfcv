import { useEffect, useState } from "react";
import moment from "moment";

function WorkExperienceTimer({ startDate, endDate }) {
  const [timeDelta, setTimeDelta] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const startMoment = moment(startDate);
      const endMoment = moment(endDate);
      const totalDuration = moment.duration(endMoment.diff(startMoment));
      const diff = now.diff(startMoment);
      const duration = moment.duration(diff);
      const remainingDuration = moment.duration(totalDuration - duration);
      setTimeDelta(remainingDuration);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  if (!timeDelta) {
    return <span>Calculating...</span>;
  }

  const startMoment = moment(startDate);
  const endMoment = moment(endDate);
  const duration = moment.duration(endMoment.diff(startMoment));
  const years = Math.floor(duration.asYears());
  const months = duration.months();
  const days = duration.days();

  return (
    <span>
      {years} years, {months} months, {days} days
    </span>
  );
}

export default WorkExperienceTimer;
