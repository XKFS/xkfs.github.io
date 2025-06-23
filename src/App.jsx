import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <nav className="flex p-4 border-2 rounded-lg mx-6 my-4 text-xl">
          <ul className="flex w-full justify-evenly">
            <li><a href="" className="hover:text-red-600">Home</a></li>
            <li><a href="" className="hover:text-red-600">About Me</a></li>
            <li><a href="" className="hover:text-red-600">Projects</a></li>
            <li><a href="" className="hover:text-red-600">Skills</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
