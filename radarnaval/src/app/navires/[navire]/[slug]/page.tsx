
import { allNavires } from 'contentlayer/generated'
import fs from 'fs'
import matter from 'gray-matter'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateStaticParams(){
  return allNavires.map((page) =>({
    slug: page.slug
  }))
}

export async function generateMetaData({
  params}: PostpageProps): Promise<Metadata | undefined> {
  const page = allNavires.find((page) => page.slug === params.slug)
  if (!page) {
    return;
  } 


  }





interface PostpageProps {
  params: {
    slug: string;
  };
}

function Postpage({ params }: PostpageProps) {
  
  const page = allNavires.find((page) => page.slug === params.slug)
  if(!page){
    return <div>NOT FOUND</div>
  }
  return (
    <>
         <div className="relative landingv2 background">
  <Image alt="fff" src={page.image_url}  layout="fill"
          objectFit="cover"/>
           <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
  <h1 className='py-5 mx-auto font-bold text-center text-7xl text-gradient text-animation' >{page.title}</h1>
         
         
        </div>
  </div>
 
    <div className='flex-col items-center justify-center '>
 
   
    
    <div className='w-full flex items-center justify-around text-white  bg-secondary h-[150px] p-5'>
    <h1 className='font-semibold font-rubik first-letter:capitalize'>{page.navire}</h1>
    <h1 className='font-semibold font-rubik first-letter:capitalize'>de {page.date_mise_en_service} à {page.date_retirement}</h1>
    <h1 className='font-semibold font-rubik '>from {page.pays_origine}</h1>
    </div>
    <div className="h-screen font-rubik flex flex-col items-center mx-auto p-8 w-1/2 cl-post-body text-[18px] ">
  
    <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
    <h1>Gallerie: </h1>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Image src={page.image_url} alt={page.slug} width={500} height={500} />
        <Image src={page.image_url} alt={page.slug} width={500} height={500} />
        <Image src={page.image_url} alt={page.slug} width={500} height={500} />
      </div>
</div>
    </div>
    
    </>
    
  )
}

export default Postpage

// fonction qui recupere le contenu de la page specifique au slug
/*const getPostContent = (slug: string) =>{
    const folder = 'content/navires/'
    const file = `${folder}${slug}.md`
    //get file

    //get content
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult;
}


}
*/
