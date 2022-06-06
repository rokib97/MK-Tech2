import React from "react";

const Service = ({ service }) => {
  const { _id, name, img, price, description } = service;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Service</div>
          <div class="badge badge-outline">Products</div>
        </div>
        <button className="btn btn-primary mt-2">Book Now</button>
      </div>
    </div>
  );
};

export default Service;
