import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FaAnchor } from 'react-icons/fa';
const Search = () => {
  return (
   
      <div className="container flex items-center justify-between mx-auto">
       
        <div className="flex items-center">
         
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un bateau"
              className="py-2 pl-5 pr-8 leading-tight text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:bg-white focus:border-blue-500"
            />
            <div className="absolute top-0 right-0 mt-3 mr-3">
              <FaAnchor className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Search;
