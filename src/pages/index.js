import React from "react"
import Navbar from "../components/Navbar"

// Route for this page should be /
export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX dsigner & web developer based in Pakistan.</p>
      </div>
    </section>
  )
}
