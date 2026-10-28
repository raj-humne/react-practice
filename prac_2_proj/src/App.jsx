import React, {useState} from 'react'

const App = () => {
const [a, setA] = useState(0)
let increment = () =>{
  setA(a+1)
}
let decrement=()=>{
  setA(a-1)
}
  return (
    <div className='bg-zinc-950 h-screen w-screen'> 
<h1 className='text-white text-5xl'>Increase/Decrease the count</h1>
<h1 className='text-white text-5xl'>{a}</h1>
<button onClick={increment} className='bg-white text-zinc-950 text-2xl m-4 pl-4 pr-4 rounded-2xl'>Increase</button>
<button  onClick={decrement} className='bg-white text-zinc-950 text-2xl m-4 pl-4 pr-4 rounded-2xl'>Decrease</button>
    </div>
  )
}

export default App