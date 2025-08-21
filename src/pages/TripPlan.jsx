// src/pages/TripPlan.jsx
import DayPlan from "../components/DayPlan";
import Pricing from "../components/Pricing";
import InclusionsExclusions from "../components/InclusionsExclusions";

const TripPlan = () => {
  return (
    <div className="py-8">
      <DayPlan />
      {/* <Pricing /> */}
      <InclusionsExclusions />
    </div>
  );
};

export default TripPlan;