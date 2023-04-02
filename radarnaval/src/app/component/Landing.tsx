import Link from 'next/link'
import Image from 'next/image'
import fuso from "../../../public/fuso.jpg"
import styles from '../style'

const LandingPage: React.FC = () => {
  return (
    <div >
      <div className="relative h-screen">
        <Image
          src={fuso}
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
          <h1 className={`${styles.heading2}font-bold text-gradient`}>Bienvenue sur Radar Naval</h1>
          <p className="text-2xl text-white">Le site Wiki des navires de guerre</p>
          <Link href="/navires">
             Voir les navires
          
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
