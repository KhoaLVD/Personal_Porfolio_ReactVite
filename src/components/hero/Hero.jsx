import "./hero.scss"
export default function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <div className="textContainer">
            <h2>KHOA LE VU DANG</h2>
            <h1>Front-end Developer and UX/UI designer</h1>
            <div className="buttons">
                <button>Latest works</button>
                <button>Contact</button>
            </div>
            <img src="./mouse-cursor.png" alt="" />
        </div>
        <div className="imageContainer">
        </div> 
        </div>
    </div>
  )
}
