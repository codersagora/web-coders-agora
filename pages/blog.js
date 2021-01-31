// LAYOUTS
import { Wrapper } from 'layout/Wrapper'
import { BlogLayout } from 'layout/BlogLayout'

// COMPONENTS
import { Post } from 'components/blog/Post'

// MOCKUP DATA
import { POSTS } from 'data/posts'

export default function Blog () {
  const getPosts = () => {
    return POSTS.map((post, i) => <Post key={i} post={post} />)
  }
  return (
    <Wrapper>
      <BlogLayout>
        {/* BLOG POSTS */}
        <div className='posts grid grid-cols-2 '>
          {getPosts()}
        </div>
        <div className='categories'>
          Mario
        </div>
      </BlogLayout>
    </Wrapper>
  )
}
