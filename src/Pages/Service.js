import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div class="card card-compact w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Name: {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-justify">{description}</p>
        <p className="text-justify">Price: ${price}</p>
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
