import Image from 'next/image'

export const LastYoutubeVideos = ({ videos = [] }) => {
  return (
    <div className='grid grid-cols-3 gap-x-12'>
      {videos.map((video, i) => {
        console.log(video)
        return (
          <div key={i}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target='blank' className='text-ca-black '>
              <div className='cursor-pointer transform hover:-translate-y-0.5 group overflow-visible transition duration-300'>
                <Image className='mb-4 rounded-lg border border-black border-opacity-10 group-hover:shadow-md overflow-visible' objectFit='cover' src={video.snippet.thumbnails.medium.url} width={video.snippet.thumbnails.medium.width} height={video.snippet.thumbnails.medium.height} />
              </div>
              <h5 className='text-lg hover:text-ca-agora-pink-300'>{video.snippet.title}</h5>
            </a>
          </div>
        )
      })}
    </div>
  )
}
