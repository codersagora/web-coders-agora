export const Row = ({ children, half }) => {
  return (
    <>
      {console.log(half)}
      <div className={`grid ${half ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {children}
      </div>
    </>
  )
}
