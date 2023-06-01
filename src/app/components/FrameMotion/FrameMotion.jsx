import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ScrollAnimationOnTrigger ({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className='w-full'
      style={{ position: "relative", overflow: 'hidden' }}
      initial={{ opacity: 0, scale: 0, bottom: -50 }}
      animate={inView ? { opacity: 1, scale: 1, bottom: 0, transition: { duration: 0.8 } } : { opacity: 0, scale: 0, bottom: 50, transition: { delay: 0.8, duration: 0.8 } }}
    >
      {children}
    </motion.div>
  )
}