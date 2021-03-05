import Image from 'next/image'
import Link from 'next/link'
export const IconCard = ({ srcImg, href, body }) => {
  return (
    <Link href={href}>
      <a>
        <div className='border-black transition-colors hover:border-ca-agora-pink-300 rounded-md hover:border-ca-main-agora border-solid border-4 flex items-end relative px-4 py-2'>
          <Image
            src={srcImg}
            alt=''
            width={70}
            height={70}
          />
          <p className='ml-5 text-ca-text-black'> {body}</p>
        </div>
      </a>
    </Link>

  )
}
