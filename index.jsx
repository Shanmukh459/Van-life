import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <nav>
        <Link className="home-btn" to="/">#VanLife</Link>
        <Link className="vans-btn" to="/vans">Vans</Link>
        <Link className="about-btn" to="/about">About</Link>
      </nav>
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

function About() {
  return (
    <>
      <nav>
        <Link className="home-btn" to="/">#VanLife</Link>
        <Link className="vans-btn" to="/vans">Vans</Link>
        <Link className="about-btn" to="/about">About</Link>
      </nav>
      <img className="about-hero" src="./about.png" />
      <section className="about-sec">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are   recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="about-card">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button>Explore our vans</button>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 #VANLIFE</p>
      </footer>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);