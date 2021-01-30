
export const PostCategories = ({ tags }) => {
  const colors = { frontend: 'blue', backend: 'green', design: 'pink', devops: 'red' }

  const getTags = () => {
    return tags.map((tag, i) => <span className={`pr-4 py-1 text-xs mr-4 rounded-xl text-${colors[tag]}-300`} key={i}>{tag}</span>)
  }

  return (
    <div className='mb-4'>
      {getTags()}
    </div>
  )
}
