import Image from 'next/image'

export const Card = ({ title, emojiSrc }) => {
  return (
    <>
      <div className='card h-52 rounded-md border-black hover:border-ca-agora-pink-300 border-solid border-4 transition flex flex-col items-start relative p-4'>
        <h5 className='text-ca-text-black'>{title}</h5>
        <div className='image-wrapper absolute bottom-2 left-4'><Image height={70} width={70} src={emojiSrc} /></div>
      </div>
      <style jsx>{`

        .card {
          box-shadow: -0.5rem 0.5rem 0 var(--agora-pink-50);
        }

        .card:hover {
          transform: translateY(-0.5rem);
          box-shadow: -0.75rem 1rem 0 var(--agora-pink-50);
        }

        .card:hover h5 {
          color: var(--agora-pink-300);
        }

        @keyframes wiggle {
          0% {
            transform: rotate(-2deg);
          }
          100% {
            transform: rotate(2deg);
          }
        }

        .card:hover .image-wrapper {

        }

        `}
      </style>
    </>
  )
}

// mx-4 md:mb-5 transition duration-500 border-ca-light-version-2 hover:border-ca-main-agora border-solid border-4 rounded flex items-end
