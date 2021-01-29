import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='py-4 px-12'>
      <Image src='/img/TextLogo.svg' width={639} height={100} />
    </div>
  )
}
