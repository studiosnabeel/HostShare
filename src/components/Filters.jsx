import React from 'react';
import { GiFishingBoat, GiMineExplosion } from 'react-icons/gi';
import { ImKey } from 'react-icons/im';
import { RiAliensFill } from 'react-icons/ri';
import { BsFillTreeFill } from 'react-icons/bs';
import Filter from './Filter';

const Filters = () => {
  const sorting = [
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
    { title: 'New', icon: <ImKey /> },
    { title: 'Boats', icon: <GiFishingBoat /> },
    { title: 'Trending', icon: <GiMineExplosion /> },
    { title: 'Alien', icon: <RiAliensFill /> },
    { title: 'Tropical', icon: <BsFillTreeFill /> },
  ];

  return (
    <div className="mx-6 md:mx-10 lg:mx-12">
      <div className="flex space-x-4 justify-center">
        {sorting.map((item) => (
          <Filter title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
