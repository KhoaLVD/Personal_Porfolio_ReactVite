import "./cursor.scss"
import {motion} from "framer-motion"
import { useEffect, useState } from "react"
export default function Cursor() {
    const [position, setPosition] = useState({x:0, y:0});
    useEffect(()=>{
        const mousMove = (e) =>{
            setPosition({x:e.clientX, y:e.clientY})
        }
        window.addEventListener("mousemove", mousMove);

        return () => {
            window.removeEventListener("mousemove", mousMove);
        }
    })
  return (
    <motion.div className='cursor' animate={{x: position.x+10, y: position.y+10}}></motion.div>
  )
}
