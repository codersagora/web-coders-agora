// NEXT
import Head from 'next/head'

// LAYOUT
import { Section } from 'layout/Section'
import { Row } from 'layout/Row'

// Components
import { TextPanel } from 'components/TextPanel'
import { GridHome } from 'components/GridHome'
import { IconCard } from 'components/cards/IconCard'
import Comparte from 'components/Icons/Comparte'
import Share from 'components/Icons/Share'
import Crece from 'components/Icons/Crece'

// DATA
import { ICONCARD } from 'data/iconcard'

export default function Home () {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Coders' Agora Community</title>
        <meta name='description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop='name' content="Coders' Agora Community" />
        <meta itemprop='description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta itemprop='image' content='/img/og-image.jpg' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://www.codersagora.org' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Coders' Agora Community" />
        <meta property='og:description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta property='og:image' content='/img/og-image.jpg' />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Coders' Agora Community" />
        <meta name='twitter:description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta name='twitter:image' content='/img/og-image.jpg' />

      </Head>
      <Section>
        <section className='mb-24'>
          <Row half>
            <TextPanel
              title={'¿Qué es Coders\' Agora?'}
              full
            />
            <div className='flex flex-col items-center'>
              <Share className='mb-5 ' />
              <Comparte className='mb-5' />
              <Crece className='mb-5' />
            </div>
          </Row>
        </section>
        <section className='mb-20'>
          <h3 className='text-ca-text-black mb-8'>¿Qué hacemos?</h3>
          <GridHome />
        </section>
        {/* className='md:mx-36' */}
        <section className='mb-24'>
          <h3 className='text-ca-text-black mb-10'>Únete, descubre y crece con nosotr_s</h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {ICONCARD.map(({ src, href, body }, key) => { return <IconCard key={key} srcImg={src} href={href} body={body} /> })}
          </div>
        </section>
      </Section>
      <style jsx>{`
      h1 {
        font-size: 5rem;
      }

      .wrapper {
        display: grid;
        grid-template-colums: 1fr min(1200px, 180%) 1fr;
      }

      .content {
        grid-column-start: 2;
      }
    `}
      </style>
    </>
  )
}
