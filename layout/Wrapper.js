export const Wrapper = ({ children }) => {
  return (
    <div className='grid grid-cols-wrapper wrapper py-4 px-6 lg:px-16'>
      {children}
    </div>
  )
}
