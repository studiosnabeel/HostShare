import React from 'react';
import Rental from './Rental';
import { house1 } from '../assets';

const Rentals = () => {
  const rentals = [
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
    {
      title: 'Texas, USA',
      image: house1,
      price: '1500',
      location: '547 elm street, NY',
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 custom:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
            location={rental.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
