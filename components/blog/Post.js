import Image from 'next/image'
import { PostCategories } from './PostCategories'

export const Post = ({ post }) => {
  const { srcImage, srcAlt, fecha, title, tags, description } = post

  return (
    <>
      <div className='post mb-16 rounded-2xl overflow-hidden border-black border-opacity-10 border-solid border-2 transform hover:translate-x-0.5 hover:-translate-y-0.5'>
        <div className='post__image-wrapper relative w-full h-52'>
          <Image
            className='post__image'
            src={srcImage}
            alt={srcAlt}
            layout='fill'
          />
        </div>
        <div className='post__body px-4 pt-5 pb-2'>
          <div className='post__body-text'>
            <p>{fecha}</p>
            <h4>{title}</h4>
            <PostCategories tags={tags} />
            <p className='text-gray-400'>{description}</p>
          </div>
          <div className='image-wrapper relative overflow-hidden flex items-center justify-center rounded-full'>
            <div className='overlay' />
            <Image className='avatar-image rounded-full' src='/img/ramoncin.jpeg' width={100} height={100} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .post {
          transition: transform 0.5s ease;
        }

        .image-wrapper {
          height: fit-content;
        }

        .overlay {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 10;
          background: rgb(145,78,194);
          background: linear-gradient(90deg, rgba(145,78,194,1) 0%, rgba(222,194,255,1) 100%);
          mix-blend-mode: soft-light ;
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
