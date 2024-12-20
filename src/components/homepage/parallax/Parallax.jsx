import "./parallax.scss"
import {useRef} from "react"
import {motion, useScroll, useTransform} from "framer-motion"
export default function Parallax({type}) {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"]
    }) 
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  return (
    <div className="parallax"  
        ref={ref}
        style={{
        background:
        type === "portfolio" ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)",
    }}>
        <motion.h1 style={{y: yText}}>{type === "portfolio" ? "My projects" : "About me"}</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div className="planets" style={{y: yBg,
            backgroundImage: `url(${type === "portfolio" ? "./planets.png" : "./sun.png"})`
        }}></motion.div>
        <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}
