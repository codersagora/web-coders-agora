import Image from 'next/image'
export const IconCard = ({ srcImg, href, body }) => {
  return (
    <a target='blank' href={href} className='text-ca-black hover:text-ca-agora-pink-300'>
      <div className='border-black border-opacity-5 transform hover:border-ca-main-agora border-solid border transition hover:border-opacity-10 hover:translate-y-1 shadow-lg hover:shadow-md rounded-md  flex items-end relative px-4 py-2'>
        <Image
          src={srcImg}
          alt=''
          width={70}
          height={70}
        />
        <p className='ml-5 text-ca-text-black'> {body}</p>
      </div>
    </a>

  )
}
