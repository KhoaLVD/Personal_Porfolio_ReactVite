import {useRef} from "react"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import "./portfolio.scss"
const items = [
    {id: 1, title: "Project 1", img: "./Frame 28.png", desc: "Lorem ipsum dolor sit amet"},
    {id: 2, title: "Project 2", img: "./Frame 28.png", desc: "Lorem ipsum dolor sit amet"},
    {id: 3, title: "Project 3", img: "./Frame 28.png", desc: "Lorem ipsum dolor sit amet"},
    {id: 4, title: "Project 4", img: "./Frame 28.png", desc: "Lorem ipsum dolor sit amet"}, 
]
const Single = ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
    });
    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See more</button>
                </motion.div>
                </div>               
            </div>
        </section>
    )
}
export default function Portfolio() {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, 
        {stiffness: 100,
        damping: 30,}
    )
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Feature Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}
