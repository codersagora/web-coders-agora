
export const PostCategories = ({ tags, className }) => {
  const colors = { frontend: 'blue', backend: 'green', design: 'pink', devops: 'red' }

  const getTags = () => {
    return tags.map((tag, i) => <span className={`align-middle px-4 text-xs rounded-xl text-${colors[tag]}-300 `} key={i}>{tag}</span>)
  }

  return (
    <>
      <div className={`tags-wrapper ${className}`}>
        {getTags()}
      </div>
      <style jsx>{`
       .tags-wrapper {
         backdrop-filter: blur(10px);
       }
      `}
      </style>
    </>
  )
}
