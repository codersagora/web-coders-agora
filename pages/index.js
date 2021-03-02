import { Section } from 'layout/Section'
import { Row } from 'layout/Row'

import { Header } from 'components/Header'
import { TextPanel } from 'components/TextPanel'
import { GridHome } from 'components/GridHome'
import { IconCard } from 'components/IconCard'
import Comparte from 'components/Icons/Comparte'
import Share from 'components/Icons/Share'
import Crece from 'components/Icons/Crece'

import Head from 'next/head'

// DATA
import { ICONCARD } from 'data/iconcard'

export default function Home () {
  return (
    <>
      <Head>
        <title>Coders' Agora Community</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* //TODO: Add SEO Tags */}

      </Head>
      <Section>
        <section className='mb-8'>
          <Row half>
            <TextPanel
              title='¿Qué es coders agora?'
              body='Una comunidad de progamador_s donde compartir conocimientos, experiencias y consejos. Con la principal misión de ayudar a nuevos programador_s y acercarlos a la realidad del mundo laboral.'
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
        <section>
          <h3 className='text-ca-text-black mb-10'>Únete, descubre y crece con nosotr_s</h3>
          <div className='md:mx-24'>
            <Row half>
              {
              ICONCARD.map(({ src, anchor, body }, key) => { return <IconCard key={key} srcImg={src} anchor={anchor} body={body} /> })
            }
            </Row>
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
