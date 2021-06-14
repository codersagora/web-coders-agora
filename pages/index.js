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
import { LastYoutubeVideos } from 'components/LastYoutubeVideos'

// DATA
import { ICONCARD } from 'data/iconcard'
import axios from 'axios'

export async function getServerSideProps (context) {
  const youtubeApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCfHS5Wam8fkB_Jkt9FLDgPA&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API}`

  const result = await axios.get(youtubeApi)

  return {
    props: {
      videos: result.data.items
    }
  }
}

export default function Home ({ videos }) {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Comunidad de programadores/as - Coders Agora</title>
        <meta name='description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta name='keywords' content='HTML, CSS, JavaScript, comunidad, programacion, developers, aprender, estudiar, estudiantes, comunidad de estudiantes, comunidad de programacion, futuro' />
        <link rel='canonical' href='http://www.codersagora.org/' />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp='name' content="Comunidad de programadores/as - Coders' Agora" />
        <meta itemProp='description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta itemProp='image' content='/img/og-image.jpg' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://www.codersagora.org' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Comunidad de programadores/as - Coders' Agora" />
        <meta property='og:description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta property='og:image' content='/img/og-image.jpg' />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Comunidad de programadores/as - Coders' Agora" />
        <meta name='twitter:description' content='Comunidad enfocada a mejorar la experiencia de aprendizaje de gente interesada en el desarrollo y diseño de productos digitales. ' />
        <meta name='twitter:image' content='https://www.codersagora.org/img/og-image.jpg' />
        <meta name='twitter:site' content='@CodersAgora_org' />

      </Head>
      <Section>
        <section className='mb-24'>
          <Row half>
            {/* Sorry is for SEO, we'll fix that right? */}
            <h1 className='hidden'>Comunidad Coders Agora</h1>
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
        <section className='mb-24'>
          <h3 className='text-ca-text-black mb-8'>Nuestros últimos vídeos</h3>
          <LastYoutubeVideos videos={videos} />
        </section>
        <section className='mb-24'>
          <h3 className='text-ca-text-black mb-8'>¿Qué hacemos?</h3>
          <GridHome />
        </section>
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
