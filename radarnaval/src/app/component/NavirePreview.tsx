import { PageMetaData } from '@/types/PageMetaData'
import Link from 'next/link'
import Image from 'next/image';

const NavirePreview: React.FC<PageMetaData> = (props) => {
    return(
       
           <Link href={`/navires/${props.type}/${props.slug}`}>

            <div className='w-full max-w-sm m-4 overflow-hidden transition duration-300 ease-in-out transform rounded shadow-lg cursor-pointer hover:-translate-y-1 hover:scale-105'>
                <Image  alt={props.slug} src={props.image_url} width={500} height={500}/>
                    <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold"><h1>{props.title}</h1></div>
                    </div>
            </div>

            </Link>
     
    )

}
export default NavirePreview