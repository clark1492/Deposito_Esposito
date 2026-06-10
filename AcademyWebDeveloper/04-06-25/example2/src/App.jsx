import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import JsonPlaceholder from './components/JsonPlaceHolder.jsx'
import GetPostById from './components/GetPostById.jsx'
import DeletePostById from './components/DeletePostById.jsx'
import PostById from './components/PostById.jsx'


const

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetPostById postId={1} />
      <GetPostById postId={2} />
      <GetPostById postId={3} />
      <GetPostById postId={4} />
      <PostById title={"Titolo del post"} body={"Contenuto del post"} userId={1} />
      <DeletePostById postId={1} />
    </>
  )
}

export default App
