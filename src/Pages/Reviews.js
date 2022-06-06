import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-16 px-12">
      <h2 className="text-4xl font-semibold text-center text-primary mb-8">
        Reviews And Feedback
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
