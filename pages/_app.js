import '../styles/globals.scss'
// Components
import { Header } from 'components/Header'

// motion
import { AnimatePresence, motion } from 'framer-motion'
import { Footer } from 'components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Header height={100} width={100} />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key='wrapper'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
