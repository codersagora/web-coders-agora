export const BlogLayout = ({ children }) => {
  return (
    <>
      <div className='grid-blog '>
        {children}
      </div>
      <style jsx>{`
            .grid-blog{
                display:grid;
                grid-template-columns: 70% 30%;
            }
        `}
      </style>
    </>
  )
}
