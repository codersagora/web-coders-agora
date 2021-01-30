import { Wrapper } from 'layout/Wrapper'
import { Header } from 'components/Header'
import { TextPanel } from 'components/TextPanel'

export default function Home () {
  return (
    <>
      <Wrapper>
        <section>
          <Header height={100} width={100} />
        </section>
        <section className='px-16 py-4'>
          <TextPanel
            title='¿Qué es coders agora?'
            body='Una comunidad de progamador_s donde compartir conocimientos, experiencias y consejos. Con la principal misión de ayudar a nuevos programador_s y acercarlos a la realidad del mundo laboral.'

          />
        </section>
      </Wrapper>
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
