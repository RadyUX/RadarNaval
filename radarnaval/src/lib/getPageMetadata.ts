import fs, { readdirSync } from 'fs'

import matter from 'gray-matter'
import { PageMetaData } from '@/types/PageMetaData'

const getPageData = (): PageMetaData[] =>{
    
     //dossier parcouru de maniere synchrone
    const folder = "content/navires"
    const files = fs.readdirSync(folder)

     //recupere que les fichier .md
     const markdownContent = files.filter((file) => file.endsWith(".md"))

     const page = markdownContent.map((filename) =>{
        const fileContent = fs.readFileSync(`content/navires/${filename}`, "utf-8")
        const matterResult = matter(fileContent)
        return {
            slug: filename.replace('.md', ''),
            title: matterResult.data.title,
            type: matterResult.data.type,
            date_mise_en_service: matterResult.data.date_mise_en_service,
            date_retirement: matterResult.data.date_retirement,
            pays_origine: matterResult.data.pays_origine,
            image_url: matterResult.data.image_url
        }
     })
 

     return page
}

export default getPageData