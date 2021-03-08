import { Card } from 'components/cards/Card'

export const GridHome = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:mr-12'>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card
          title='Publicaciones'
          body='Posts en nuestro Blog y videos en nuestro canal'
          emojiSrc='/img/emoji/sauripodo-wa.png'
        />
      </div>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card
          title='Actividades Conjuntas'
          body='Katas en Codewars, lecturas de libros en grupo, retos conjuntos...'
          emojiSrc='/img/emoji/whale-wa.png'
        />
      </div>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card
          title='Quedadas'
          body='Cuando se pueda, obviamente'
          emojiSrc='/img/emoji/alpaca-ap.png'
        />
      </div>

      <div className='col-span-2'>
        <Card
          title='Proyectos Conjuntos'
          body='Proyectos en grupo para practicar mejorar nuestras habilidades en equipo'
          emojiSrc='/img/emoji/unicorn-ap.png'
        />
      </div>

      <div className='md:col-span-1 col-span-2'>
        <Card
          title='Formación'
          body='Cursos de uno o dos días hechos por los miembros de la comunidad'
          emojiSrc='/img/emoji/lion.png'
        />
      </div>
    </div>
  )
}
