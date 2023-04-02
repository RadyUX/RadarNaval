import Link from 'next/link'
import './globals.css'
import getPageData from '@/lib/getPageMetadata'
import NavirePreview from './component/NavirePreview'
import styles, { layout } from './style'
import LandingPage from './component/Landing'
export default function Home() {

  const pageData= getPageData()
  const pagePreview = pageData.map((page)=>(
    <NavirePreview key ={page.slug} {...page} />
  ))
  return (
    <>
    <LandingPage />
    <div className="flex-col justify-center py-6 mx-auto ">
      <h1 className='text-4xl'>Ajout récent</h1>
      <div  className={`${layout.section} mx-auto`}>
      {pagePreview}
      </div>
    </div>
    </>
  )
}
