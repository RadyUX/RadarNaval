import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import styles from '@/app/style'
const getPostContent = (type: string) =>{
  const folder = 'content/type/'
  const file = `${folder}${type}.md`
  //get file

  //get content
  const content = fs.readFileSync(file, 'utf-8')
  const matterResult = matter(content)
  return matterResult;
}

interface PostpageProps {
params: {
  type: string;
};
}


function NavirePage(props: PostpageProps) {
  const slug = props.params.type
  const post = getPostContent(slug)
return (
  <div>
  

  <div className="relative landing background">
  <Image alt={post.data.title} src={post.data.img}  layout="fill"
          objectFit="cover"/>
  </div>

  <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
          <h1 className={`${styles.heading2}font-bold text-white text-animation`}>{post.data.title}</h1>
          <p className="py-3 text-4xl text-white text-animation">{post.data.title}</p>
         
        </div>
  <Markdown>{post.content}</Markdown>
  </div>
)
}


export default NavirePage;