import { PageMetaData } from '@/types/PageMetaData'
import Link from 'next/link'
import Image from 'next/image';


const NavirePreview: React.FC<PageMetaData> = (props) => {
    return(
       
           <Link href={`/navires/${props.navire}/${props.slug}`}>

<div className="w-3/4 m-4 overflow-hidden transition duration-300 ease-in-out transform rounded shadow-lg cursor-pointer h-80 hover:-translate-y-1 hover:scale-105">
        <div className="relative w-full overflow-hidden h-2/3">
          <Image
            alt={props.slug}
            src={props.image_url}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>

            </Link>
     
    )

}
export default NavirePreview