
import { useState, Suspense } from 'react'
import './App.css'
import Cats from './cats/cats.jsx'

function getCats() {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=20', {
    headers: {
      'x-api-key': 'live_4RNtOMDljUBYiEHEskcLLTacl2OEzRK8yiqkokXkqUMnj4oDSIWu5JDnSHcOTQfb'
    }
  })
  .then(res => res.json())
}
function App() {

  const [catPromise, setCatPromise]= useState(getCats())
  function loadNewCats() {
  setCatPromise(getCats())
}
  return (
    <>
        <div>

          <h1>Click to load 20 random Cat Images</h1>
          <button onClick={loadNewCats}>Load New Cats</button>
          <Suspense fallback={<p>Loading.....</p>}>
          <Cats catPromise={catPromise}></Cats>
          </Suspense>
        </div>
    </>
  )
}

export default App
