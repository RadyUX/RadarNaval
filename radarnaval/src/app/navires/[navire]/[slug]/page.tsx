
import { allNavires } from 'contentlayer/generated'
import fs from 'fs'
import matter from 'gray-matter'
import { Metadata } from 'next'


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

interface PostpageProps {
  params: {
    slug: string;
  };
}

function Postpage({ params }: PostpageProps) {
  
  const page = allNavires.find((page) => page.slug === params.slug)
  return (
    <div className='flex-col items-center justify-center'>
    <h1 className='mx-auto text-4xl font-bold text-gradient'>{page.title}</h1>
    <h1>{page.navire}</h1>
    <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: page.body.html }} />

    

    </div>
  )
}

export default Postpage