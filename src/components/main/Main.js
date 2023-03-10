import React from 'react'
import Header from './Header'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

import '../../styles/maincss/Main.css'

export default function Main() {
  return (
    <main>
      <Header/>
      <section className="mainSection">
        <FirstSection/>
        <SecondSection/>
      </section>
    </main>
  )
}
