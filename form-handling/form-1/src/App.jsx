import React, {useState} from 'react'


const App = () => {
const [username, setUsername] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className='bg-black h-screen w-screen'><form onSubmit={()=>{
      submitHandler()
    }}> 
      <input 
      value={username}
      onChange={(e)=>{
setUsername(e.target.value)
      }} type="text" placeholder='Enter Your Name ' className='  bg-white m-3.5 text-xl px-5 py-4 text-zinc-900 rounded-2xl'/>
      <input type="submit" className='bg-emerald-700 px-3.5 py-3.5 rounded-2xl'/>
      </form></div>
  )
}

export default App