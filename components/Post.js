import Image from 'next/image'

export const Post = ({ post }) => {
  const { srcImage, srcAlt, title, tags, description } = post

  return (
    <div>
      <Image
        src={srcImage}
        alt={srcAlt}
        width={100}
        height={100}
      />
      <h3>{title}</h3>
      {
        tags.map((item, i) => <p key={i}>{item}</p>)
      }
      <p>{description}</p>
    </div>
  )
}
