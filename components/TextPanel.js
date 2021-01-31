export const TextPanel = ({ title, body, full }) => {
  return (
    <>
      <div className={`text-panel relative pb-6 pt-1 ${full ? 'w-full' : 'w-full lg:w-1/2'}`}>
        <h3 className='text-panel__title z-10 mt-0'>{title}</h3>
        <p className='text-panel__body z-10'>{body}</p>
        <div className='text-panel__background bg-pink-100 h-full w-3/4 absolute top-0 -left-8 z-0 ' />
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
