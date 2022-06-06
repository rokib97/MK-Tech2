import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div class="card card-compact w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p className="card-text text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, culpa
          quia sit temporibus facere iusto.
        </p>
        <div class="card-actions justify-start">
          <button class="btn btn-primary">Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
