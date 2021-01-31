import { WeDoCard } from './WeDoCard'

export const GridHome = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 md:mx-24'>
      <div className='md:col-span-1 col-span-2'>
        <WeDoCard title='Publicaciones' emoji='🐌' />
      </div>
      <div className='md:col-span-1 col-span-2'>
        <WeDoCard title='Retos Comunitarios' emoji='🐳' />
      </div>
      <div className='md:col-span-1 col-span-2'>
        <WeDoCard title='Quedadas' emoji='💔' />
      </div>
      <div className='col-span-2'>
        <WeDoCard title='Proyectos Conjuntos' emoji='🦄' />
      </div>
      <div className='md:col-span-1 col-span-2'>
        <WeDoCard title='Formación' emoji='📋' />
      </div>
    </div>

  )
}
