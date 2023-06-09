import Link from 'next/link'
import Image from 'next/image'
import fuso from "../../../public/fuso.jpg"
import styles from '../style'
import Search from './Search'

const LandingPage: React.FC = () => {
  return (
    <div >
      <div className="relative landing">
        <Image
          src={fuso}
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          
        />
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
          <h1 className={`${styles.heading2}font-bold text-gradient text-animation`}>RadarNaval <br></br>Le guide des navires de guerre</h1>
          <p className="py-1 text-4xl text-white md:text-1xl text-animation">Découvrez l'histoire, les caractéristiques et les exploits des navires de guerre les plus légendaires de tous les temps.</p>
        
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
