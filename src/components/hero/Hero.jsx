import "./hero.scss"
import {motion} from "framer-motion"
const textVariants = {
  initial: {
    x: -500,
    opacity:0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    //When using variants, animations of child components can be staggered by this duration (in seconds).
    // For instance, if staggerChildren is 0.01, the first child will be delayed by 0 seconds, the second by 0.01, the third by 0.02 and so on.
    // The calculated stagger delay will be added to delayChildren
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity:2,
    y:10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
}
export default function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants = {textVariants} initial="initial" animate="animate">
            <motion.h2 variants = {textVariants}>KHOA LE VU DANG</motion.h2>
            <motion.h1 variants = {textVariants}>Front-end Developer and UX/UI designer</motion.h1>
            <motion.div variants = {textVariants} className="buttons">
                <motion.button variants = {textVariants}>Latest works</motion.button>
                <motion.button variants = {textVariants}>Contact</motion.button>
            </motion.div>
            <motion.img variants = {textVariants} src="./scroll.png" animate="scrollButton" alt="" />
        </motion.div>
        <div className="imageContainer">
        </div> 
        </div>
    </div>
  )
}
