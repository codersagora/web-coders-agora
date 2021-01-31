export const Row = ({ children, half }) => {
  return (
    <>
      <div className={`grid gap-4 md:gap-0 ${half ? ' grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {children}
      </div>
    </>
  )
}
