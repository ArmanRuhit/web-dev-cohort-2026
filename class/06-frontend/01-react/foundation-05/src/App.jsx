import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ManualForm from './ManualForm.jsx'
import HookForm from './HookForm.jsx'

function App() {
  const [tab, setTab] = useState(true)

  return (
    <>
     <div>
      <h1>Getting Started with react</h1>
      {tab ? <ManualForm /> : <HookForm />}
     </div>
    </>
  )
}

export default App
