import '../styles/globals.scss'
// Components
import { Header } from 'components/Header'

// motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp ({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Header height={100} width={100} />
      <motion.div exit={{ opacity: 0 }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
