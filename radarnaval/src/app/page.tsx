import Link from 'next/link'
import './globals.css'
import getPageData from '@/lib/getPageMetadata'


export default function Home() {

  const pageContent = getPageData()
  const ddd = pageContent[0].title
  return (
    <h1 className="text-3xl font-rubik ">
    {ddd}
   <Link href="/navires">LLS</Link>
</h1>
  )
}
