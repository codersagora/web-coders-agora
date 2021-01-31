import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = (props) => {
  const { width, height, href, desc } = props
  const router = useRouter()

  const pathname = router.pathname.substring(1)
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className='flex py-4 px-12'>
      <div className='mr-10'>
        <Link href='/'>
          <Image src='/img/FlattenedLogo.svg' alt='coders-agora-image-logo' width={width} height={height} />
        </Link>
      </div>
      {
      pathname === href
        ? (
          <div>
            <h1 className='inline align-middle  text-ca-text-black text-5xl'>
              {capitalize(pathname)}
            </h1>
            <p className='text-4xl text-ca-lighter-black font-bold'>{desc}</p>
          </div>
          )
        : <Image src='/img/typoLogo.svg' alt='coders-agora-text-logo' width={500} height={height} />
      }

    </div>
  )
}
