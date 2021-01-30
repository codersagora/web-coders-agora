import Image from 'next/image'
import { PostCategories } from './PostCategories'

export const Post = ({ post }) => {
  const { srcImage, srcAlt, fecha, title, tags, description } = post
  return (
    <>
      <div className='post mb-16 rounded-2xl overflow-hidden border-black border-opacity-10 border-solid border-2 '>
        <div className='post__image-wrapper relative w-full h-52'>
          <div className='post-overlay' />
          <Image
            className='post__image'
            src={srcImage}
            alt={srcAlt}
            layout='fill'
          />
          <PostCategories className='absolute left-4 bottom-4 rounded-lg z-10 bg-black bg-opacity-20 px-4' tags={tags} />
        </div>
        <div className='post__body px-4 pt-5 pb-2'>
          <div className='post__body-text'>
            <p>{fecha}</p>
            <h4>{title}</h4>
            <p className='text-gray-400'>{description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .post {
          transition: transform 0.5s ease;  
        }

      
        
        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0.25;
          height: 100%;
          background: linear-gradient(85.88deg, #141414 0%, rgba(231, 231, 231, 0) 134.43%);
          transition: opacity 0.3s ease;
          z-index: 5;
        }

        .post:hover .post-overlay {
          opacity: 0.4;
          
        }

        .image-wrapper {
          height: fit-content;
        }
        
        .post__body {
          display: grid;
          grid-template-columns: auto 100px;
        }


        :global(.post__image){
          object-fit: cover;
        }
        `}
      </style>
    </>
  )
}
