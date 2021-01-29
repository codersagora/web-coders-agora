import Link from 'next/link'
import { Wrapper } from 'layout/Wrapper'
import { Hero } from 'components/Hero'
import { TextPanel } from 'components/TextPanel'

export default function Home () {
  return (
    <>

      <Wrapper>
        <section>
          <Hero />
        </section>
        <section className='px-16 py-4'>
          <TextPanel
            title='¿Qué es coders agora?'
            body='Lorem ipsum mis muiertos cuatro pastillas me metoe sta noche'

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
