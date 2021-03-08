import { useState } from 'react'

import Image from 'next/image'

export const Card = ({ title, body, emojiSrc }) => {
  const [opened, setOpened] = useState(true)

  return (
    <>
      <div
        onClick={() => setOpened(!opened)}
        className='card cursor-pointer h-52 rounded-md border-black hover:border-ca-agora-pink-300 border-solid border-4 transition flex flex-col items-start justify-between relative p-4 '
      >
        <h5 className='text-ca-text-black'>{title}</h5>
        <div className={` image-wrapper absolute bottom-2 left-4 ${opened ? 'show' : 'hide'}`}><Image height={70} width={70} src={emojiSrc} /></div>
        <p className={!opened ? 'show' : 'hide'}>{body}</p>
      </div>
      <style jsx>{`

        .show {
          transition: opacity 0.3s ease-in;
          opacity: 1;
        }

        .hide {
          transition: opacity 0.2s ease-out;
          opacity: 0;
        }

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
