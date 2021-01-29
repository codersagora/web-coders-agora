import { POSTS } from 'data/posts'
import { Post } from 'components/Post'

export const BlogLayout = () => {
  const getPost = () => {
    return POSTS.map((post, i) => <Post key={i} post={post} />)
  }

  return (
    <>
      <div className='grid-blog'>
        <div className='post'>
          {getPost()}
        </div>
        <div className='categories'>
          <p>sdfsd</p>
        </div>

      </div>
      <style jsx>{`
            .grid-blog{
                display:grid;
                grid-template-columns: 80% 20%;
                
            }

            .post{
                background:#ADFEF6;
            }

            .categories{
                background:#F3FEAD;
            }
        `}
      </style>
    </>
  )
}
