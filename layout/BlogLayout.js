export const BlogLayout = ({ children }) => {
  return (
    <>
      <div className='grid-blog py-4 px-16'>
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
