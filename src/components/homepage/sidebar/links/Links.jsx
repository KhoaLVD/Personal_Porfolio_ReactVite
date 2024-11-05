
export default function Links() {
  const items = ["Homepage", "Portfolio", "Contact"]
  return (
    <div className="links">{items.map((item) =>(
      <a href={`#${item}`} key={item}>
        {item}
        </a>
    ))}</div>
  )
}
