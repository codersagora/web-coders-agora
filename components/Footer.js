import { Devto } from 'components/svgs/Devto'
import { Twitter } from 'components/svgs/twitter'
import { Linkedin } from './svgs/Linkedin'

export const Footer = () => {
  return (
    <div className='w-full py-4 bg-ca-black '>
      <div className='max-w-screen-xl text-sm m-auto text-white'>
        <h5 className='mb-4'>Contacta</h5>
        <ul className='flex '>
          <li className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='https://twitter.com/CodersAgora_org' target='blank'><Twitter fill='var(--agora-pink-10)' width='24' height='24' /></a></li>
          <li className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='dev.to'><Devto fill='var(--agora-pink-10)' width='24' height='24' /></a></li>
          <li className='mr-4 opacity-60 transition-all transform hover:opacity-95 hover:scale-105'><a href='linkedin.com/company/codersagora'><Linkedin fill='var(--agora-pink-10)' width='24' height='24' /></a></li>
          <li><a href='mailto:codersagora@gmail.com'> </a></li>
        </ul>
      </div>
    </div>
  )
}
