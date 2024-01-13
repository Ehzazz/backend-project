import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'


function App() {
  const [jokes, setJokes]=useState([0])

  useEffect(()=>{
    axios.get("http://localhost:3000/jokes")
    .then((respose)=>{
      setJokes(respose.data)
      console.log(respose.data)
    })
    .catch((error)=>{

      console.log(error)
    })
    

  })

  return (
    <>
      <div>
        <h1> Chai and BACKEND </h1>
        <p>Jokes: {jokes.length}</p>
        {
          jokes.map((joke, index)=>(
            <div key={jokes.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>

            </div>

          ))
        }
        
      </div>
    </>
  )
}

export default App
