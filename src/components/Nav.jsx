import { logo, logomini } from '../assets';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import { AdjustmentsIcon } from '@heroicons/react/solid';

const Nav = () => {
  return (
    <header className="p-4 md:shadow-md sticky flex items-center md:justify-evenly lg:justify-between space-x-4 w-full">
      {/* Left  */}
      <div>
        <img
          className="hidden md:inline-flex lg:hidden h-8 lg:h-8 xl:h-10"
          src={logomini}
          alt="HostShare logo"
        />
        <img
          src={logo}
          alt=""
          className="hidden lg:inline-flex h-8 lg:h-8 xl:h-10"
        />
      </div>
      {/* Middle  */}
      <div className="w-full text-xs flex space-x-4 items-center border-2 border-gray-200 rounded-full p-2 shadow-md md:w-[400px] cursor-pointer md:hover:shadow-lg md:transition-150 ease-in-out">
        {/* Mobile left */}
        <SearchIcon className="h-5 w-5  rounded-full md:hidden" />
        {/* Mobile middle */}
        <div className="flex flex-col md:flex-row w-full  md:space-x-4">
          <h2 className="font-semibold md:font-normal">Anywhere</h2>

          <span className="hidden md:inline-flex text-gray-400">|</span>
          <div className="flex space-x-2 text-[13px] md:text-xs text-gray-600 md:text-black">
            <h2 className="font-normal">Any week</h2>
            <span className="md:hidden">.</span>
            <span className="hidden md:inline-flex text-gray-400">|</span>
            <h2 className="md:text-gray-600">Add guests </h2>
          </div>
          <SearchIcon className="hidden md:inline-flex h-5 w-5 bg-red-500 text-white rounded-full p-[4px] " />
        </div>
        {/* Mobile right */}
        <AdjustmentsIcon className="h-6 text-gray-600 md:hidden md:w-0" />
      </div>
      {/* Right  */}
      <div className="hidden md:inline-flex items-center space-x-4 justify-end">
        <p className="text-xs text-black font-normal hover:shadow-lg cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-4 cursor-pointer text-gray-700 hover:shadow-lg" />
        <div className="flex space-x-2 border-2 p-2 rounded-full hover:shadow-md cursor-pointer">
          <MenuIcon className="h-4 text-gray-700" />
          <UserCircleIcon className="h-4 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
