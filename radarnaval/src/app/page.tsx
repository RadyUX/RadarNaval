import Link from 'next/link'
import './globals.css'
import getPageData from '@/lib/getPageMetadata'
import NavirePreview from './component/NavirePreview'
import styles, { layout } from './style'
import LandingPage from './component/Landing'
import { allNavires } from 'contentlayer/generated'
import About from './component/About'
import Footer from './component/Footer'
import Head from 'next/head'


export default function Home() {

  
  const pagePreview = allNavires.slice(0,6).map((page)=>(
    <NavirePreview key ={page.slug} {...page} />
  ))
  return (
    <>
    <Head>
        <link rel="icon" href="../../public/logo.ico" />
      </Head>
    <LandingPage />
    <section className='py-1 bg-gray-100'>
    <div className="flex-col items-center w-full px-5 mx-auto text-center sm:px-6 lg:px-8">
      <h1 className='py-4 text-4xl'>Last added</h1>
      <div  className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 xl:grid-cols-3">
      {pagePreview}
      </div>
    </div>
    </section>
    <About />
    </>
  )
}
