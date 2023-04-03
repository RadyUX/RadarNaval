import Link from 'next/link'
import './globals.css'
import getPageData from '@/lib/getPageMetadata'
import NavirePreview from './component/NavirePreview'
import styles, { layout } from './style'
import LandingPage from './component/Landing'
import { allNavires } from 'contentlayer/generated'
import About from './component/About'

export default function Home() {

  
  const pagePreview = allNavires.slice(0,5).map((page)=>(
    <NavirePreview key ={page.slug} {...page} />
  ))
  return (
    <>
    <LandingPage />
    <section className='py-16'>
    <div className="flex-col items-center w-full px-5 mx-auto text-center sm:px-6 lg:px-8">
      <h1 className='py-2 text-4xl'>Dernier Ajout</h1>
      <div  className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 lg:grid-cols-5">
      {pagePreview}
      </div>
    </div>
    </section>
    <About />
    </>
  )
}
