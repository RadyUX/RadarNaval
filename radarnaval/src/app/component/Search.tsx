'use client'

import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { FaAnchor } from 'react-icons/fa';
import { useEffect, useState } from 'react'; 
import { Navire } from 'contentlayer/generated';


const Search : React.FC<{ data: Navire[]}> = ({data}): JSX.Element => {
    const [filtereData, setFilteredData] = useState<Navire[]>([])
    const [value, setValue] = useState<string>('')
    const router = useRouter();



    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleFilter();
        }
      };
    
    const handleFilter = (): void => {
        const searchWord: string = value.toLowerCase();
        setValue(searchWord);

        const newFilter: Navire[] = data.filter(({ title }): boolean =>
        title.toLowerCase().includes(searchWord)
      );

      if (!searchWord) {
        setFilteredData([]);
      } else if (newFilter.length === 1) {
        router.push(`/navires/${newFilter[0].navire}/${newFilter[0].slug}`);
      } else if(newFilter.length === 0){
        router.push(`/not-found?query=${searchWord}`);
      } else {
        setFilteredData(newFilter);
      }

      }

  
    
      

  return (
   
      <div className="container flex items-center justify-between mx-auto">
       
        <div className="flex items-center">
         
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un bateau"
              className="py-2 pl-5 pr-8 leading-tight text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:bg-white focus:border-blue-500"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              
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
