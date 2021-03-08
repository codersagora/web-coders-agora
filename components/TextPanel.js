export const TextPanel = ({ title, body, full }) => {
  return (
    <>
      <div className={`text-panel relative pb-6 pt-1 ${full ? 'w-full' : 'w-full lg:w-1/2'}`}>
        <h3 className='text-panel__title z-10 mt-0 mb-4 text-ca-text-black'>{title}</h3>
        <p className='text-panel__body z-10'>Una comunidad de progamador_s donde compartir conocimientos, experiencias y consejos. Con la <strong>principal misión</strong> de mejorar la experiencia de aprendizaje y conocer mejor la realidad del mundo laboral.`</p>
        <div className='text-panel__background bg-ca-agora-pink-10 h-full w-3/5 absolute top-0 -left-10 z-0 ' />
      </div>
      <style jsx>{`
        .text-panel__background {
          z-index: -10;
        }
        `}
      </style>
    </>
  )
}
