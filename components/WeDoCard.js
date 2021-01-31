
export const WeDoCard = ({ title, emoji }) => {
  return (
    <div className=' mb-5 mx-2 h-52 rounded-md border-ca-light-version-2 hover:border-ca-main-agora border-solid border-4 transition duration-500 flex flex-col items-start'>
      <div className='ml-5 mt-5'>
        <h5 className='text-ca-text-black mb-10'>{title}</h5>
        <p className='text-7xl'>{emoji}</p>
      </div>

    </div>
  )
}

// mx-4 md:mb-5 transition duration-500 border-ca-light-version-2 hover:border-ca-main-agora border-solid border-4 rounded flex items-end
