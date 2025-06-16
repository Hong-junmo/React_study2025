import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* zustand 실습1 */}
      {/* <Count/> */}

      {/* zustand 실습2 */}
      <Todo/>
    </div>
  )
}

export default App
