
import './App.css'

function App() {

  function hundleClick(){
    alert("button clicked")
  }
  const hundleClick2 = () => {
    alert("hey! You just click on button 2")
  }

  const addToFour = (num) => {
    alert(num+5)
  }

  return (
    <>
      <h1 className='text-4xl font-semibold'>React concept</h1>
      <button onClick={hundleClick} className='border-2 border-s-teal-950 p-2'>Click</button>
      <button onClick={hundleClick2} className='border-2 border-s-teal-950 p-2'>Click2</button>
      <button onClick={()=>addToFour(6)} className='border-2 border-s-teal-950 p-2'>Click3</button>
    </>
  )
}

export default App
