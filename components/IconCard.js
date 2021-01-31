import Image from 'next/image'
import Link from 'next/link'
export const IconCard = ({ srcImg, anchor, body }) => {
  return (

    <div className='mx-4 md:mb-5 transition duration-500 border-ca-light-version-2 hover:border-ca-main-agora border-solid border-4 rounded flex items-end '>
      <Link href={anchor}>
        <a> <Image
          src={srcImg}
          alt=''
          width={70}
          height={70}
            />
        </a>
      </Link>
      <p className='ml-5 text-ca-text-black'> {body}</p>
    </div>

  )
}
//
