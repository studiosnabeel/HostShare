import React from 'react';

const Rental = ({ title, image, price, location }) => {
  return (
    <div className="p-4 text-xs flex flex-col space-y-1">
      <img className="rounded-[.5rem]" src={image} alt="" />
      <h3 className="font-semibold">{title}</h3>
      <p>{location}</p>
      <p>jun28-jul3</p>
      <p className="font-semibold">${price} night</p>
    </div>
  );
};

export default Rental;
