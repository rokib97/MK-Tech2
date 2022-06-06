import React from "react";
import expert1 from "../images/experts/expert-1.jpg";
import expert2 from "../images/experts/expert-2.jpg";
import expert3 from "../images/experts/expert-3.jpg";
import expert4 from "../images/experts/expert-4.jpg";
import expert5 from "../images/experts/expert-5.jpg";
import expert6 from "../images/experts/expert-6.png";
import Expert from "./Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Will Smith", img: expert1 },
    { id: 2, name: "Cris Rock", img: expert2 },
    { id: 3, name: "Dwayne Rock", img: expert3 },
    { id: 4, name: "Donald Roward", img: expert4 },
    { id: 5, name: "Steve Jhonshon", img: expert5 },
    { id: 6, name: "Will Donald", img: expert6 },
  ];
  return (
    <div className="mt-12 px-12">
      <h2 className="text-4xl font-semibold text-center text-primary mb-8">
        Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {experts.map((expert) => (
          <Expert expert={expert} key={expert.id} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
