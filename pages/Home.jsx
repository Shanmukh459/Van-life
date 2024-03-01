import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <main className="home-main">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
      </main>
      <footer>
        <p>&copy; 2024 #VANLIFE</p>
      </footer>
    </>
  )
}