import { Card } from 'components/cards/Card'

export const GridHome = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:mr-12'>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card title='Publicaciones' emojiSrc='/img/emoji/sauripodo-wa.png' />
      </div>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card title='Actividades Conjuntas' emojiSrc='/img/emoji/whale-wa.png' />
      </div>

      <div className='transform translate-x-12 md:col-span-1 col-span-2'>
        <Card title='Quedadas' emojiSrc='/img/emoji/alpaca-ap.png' />
      </div>

      <div className='col-span-2'>
        <Card title='Proyectos Conjuntos' emojiSrc='/img/emoji/unicorn-ap.png' />
      </div>

      <div className='md:col-span-1 col-span-2'>
        <Card title='Formación' emojiSrc='/img/emoji/lion.png' />
      </div>
    </div>
  )
}
