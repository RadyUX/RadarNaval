import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import styles from '@/app/style'
import {  allTypes } from 'contentlayer/generated'
import { Metadata } from 'next'


/*const getPostContent = (type: string) =>{
  const folder = 'content/type/'
  const file = `${folder}${type}.md`
  //get file

  //get content
  const content = fs.readFileSync(file, 'utf-8')
  const matterResult = matter(content)
  return matterResult;
}
*/


// This is the function that Next.js will call to generate the static pages
export async function generateStaticParams(){
  return allTypes.map((type) =>({
    navire: type.navire
  }))
}



export async function generateMetaData({
  params}: pageProps): Promise<Metadata | undefined> {
  const navirePage = allTypes.find((page) => page.navire === params.navire )
  if(!navirePage){
    return 
  }

  
}

interface pageProps {
params: {
  navire: string;
};
}




function NavirePage({ params }: pageProps) {
  
  const page = allTypes.find((page) => page.navire === params.navire)
 
  return (
  <div>
  

  <div className="relative landing background">
  <Image alt="fff" src={page.img}  layout="fill"
          objectFit="cover"/>
  </div>

  <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
          <h1 className={`${styles.heading2}font-bold text-white text-animation`}>{page.title}</h1>
          <p className="py-3 text-4xl text-white text-animation">{page.title}</p>
         
        </div>
  
  </div>
)
}


export default NavirePage;