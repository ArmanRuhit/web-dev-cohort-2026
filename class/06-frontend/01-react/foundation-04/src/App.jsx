import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  function add() {
    console.log("value button clicked")
    setValue(value+1) //not so good
  }

  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('idle')
  const [seconds, setSeconds] = useState(10)

  const addData = () => {
    setPosts([
      ...posts,
      "ruhit",
      "arman"
    ])
  }

  useEffect(() /*callback*/ => { 

    const timerId =  setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0))
    }, 1000)

    return () => {
      // cleanup
      clearInterval(timerId)
    }
  }, [] /*dependency array*/ )

  useEffect(() => {
    const controller = new AbortController();
    async function loadpost() {
      console.log("load post called")
      try {
        setStatus("loading")
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
          signal: controller.signal
        })
  
        const data = await response.json()
        console.log(data)
        setPosts(data)
        setStatus("success")
      } catch (error) {
        console.log(error)
        setStatus("Error")
      }
    }

    loadpost() 
    // in useEffect function can be created and called

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={add}>✅</button>
      </div>
      <div>
        <h1>useEffect</h1>
        <p>{seconds}</p>
        <h1>Posts</h1>
        {posts.map((post => <p>{post.id} {post.title}</p>))}
      </div>
    </>
  )
}

export default App
