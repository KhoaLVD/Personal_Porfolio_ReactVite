
export default function ToggleButton({setOpen}) {
  return (
    <button onClick={()=> setOpen((prev) => !prev)}>
        button</button>
  )
}
