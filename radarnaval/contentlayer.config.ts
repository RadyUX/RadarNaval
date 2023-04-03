
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Navire = defineDocumentType(() => ({
  name: 'Navire',
  filePathPattern: `navires/**/*.md`,
  fields: {
    slug: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    navire: {
      type: 'string',
      required: true,
    },
    date_mise_en_service: {
      type: 'string',
      required: true,
    },
    date_retirement: {
      type: 'string',
      required: true,
    },
    pays_origine: {
      type: 'string',
      required: true,
    },
    image_url: {
      type: 'string',
      required: true,
    },
  },
}));



export const Type = defineDocumentType(() => ({
  name: 'Type',
  filePathPattern: `type/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    navire: {
      type: 'string',
      required: true,
    },
    desc:{
        type: 'string',
        required: true,
    },
    img: {
      type: 'string',
      required: true,
    },
  },

}));




export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Navire, Type],
  });
  