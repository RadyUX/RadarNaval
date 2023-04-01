import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'



const getPostContent = (slug: string) =>{
    const folder = 'content/navires/'
    const file = `${folder}${slug}.md`
    //get file

    //get content
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult;
}



function Postpage(props: any) {
    const slug = props.params.slug
    const post = getPostContent(slug)
  return (
    <div>
    <h1>{post.data.title}</h1>
    <Markdown>{post.content}</Markdown>
    </div>
  )
}

export default Postpage