import { Devto } from 'components/svgs/Devto'
import { Twitter } from 'components/svgs/twitter'
import Image from 'next/image'
import { Linkedin } from './svgs/Linkedin'

export const Footer = () => {
  return (
    <>
      <div className='w-full py-4 bg-ca-black relative'>
        <div className='img-wrapper hidden md:block'>
          <Image src='/img/FlattenedLogo.svg' height={70} width={70} />
        </div>
        <div className='max-w-screen-xl text-sm m-auto text-white px-8 xl:px-0'>
          <h5 className='mb-4'>Contacta</h5>
          <div className='flex items-end justify-between'>
            <div className='flex'>
              <div className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='https://twitter.com/CodersAgora_org' target='blank'><Twitter fill='var(--agora-pink-10)' width='24' height='24' /></a></div>
              <div className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='dev.to'><Devto fill='var(--agora-pink-10)' width='24' height='24' /></a></div>
              <div className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='https://www.linkedin.com/company/coders-agora'><Linkedin fill='var(--agora-pink-10)' width='24' height='24' /></a></div>
            </div>
            <div>More info: <a href='mailto:codersagora@gmail.com'>codersagora@gmail.com</a></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        
        .img-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        
        `}
      </style>
    </>
  )
}
