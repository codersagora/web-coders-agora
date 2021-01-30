import Image from 'next/image'
import { useRouter } from 'next/router'

export const Header = (props) => {
  const { width, height, href } = props
  const router = useRouter()

  return (
    <div className='py-4 px-12'>
      <Image src='/img/FlattenedLogo.svg' alt='coders-agora-image-logo' width={width} height={height} />

      {router.pathname === href
        ? <h1 className='inline'>{router.pathname.slice(1).split('/')}</h1>
        : <Image src='/img/Coders’ Agora.svg' alt='coders-agora-text-logo' width={500} height={height} />}

    </div>
  )
}
