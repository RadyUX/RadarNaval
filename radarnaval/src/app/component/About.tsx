import { prisma, tailwind, next, typescript } from "@/data/assets"
import Image from "next/image"

function About() {
  return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient sm:text-8xl">À propos</h2>
        <p className="mt-4 text-lg text-gray-500">
          Site wikipédia 
        </p>
      </div>
      <div className="mt-20">
        <h3 className="text-lg font-medium text-gray-900">Notre mission</h3>
        <p className="mt-2 text-gray-500">
          Notre mission est de fournir des navires de guerre de qualité supérieure pour répondre aux besoins de nos clients.
          Nous sommes engagés à fournir des navires qui sont fiables, sûrs et efficaces pour toutes les opérations maritimes.
        </p>
      </div>
      <div className="mt-20">
        <h3 className="text-lg font-medium text-gray-900">Notre équipe</h3>
        <p className="mt-2 text-gray-500">
          Notre équipe est composée de professionnels expérimentés dans la conception, la fabrication et l'entretien de navires de
          guerre. Nous sommes passionnés par notre travail et déterminés à fournir les meilleurs résultats pour nos clients.
        </p>
      </div>
      <div className="flex items-center justify-center py-6 space-x-6">
  <div className="flex items-center justify-center w-20 h-20 rounded-full">
    <Image alt="Prisma" src={prisma} width={80} height={80} />
  </div>
  <div className="flex items-center justify-center w-20 h-20 rounded-full">
    <Image alt="Tailwind" src={tailwind} width={70} height={70} />
  </div>
  <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-md">
    <Image alt="Next.js" src={next} width={70} height={70} />
  </div>
  <div className="flex items-center justify-center w-20 h-20 rounded-full">
    <Image alt="TypeScript" src={typescript} width={70} height={70} />
  </div>
</div>
    </div>
  </section>
  )
}

export default About