import React from 'react'
import "./Hero.css"

export default function Hero() {
  return (

    <div className="hero-container">
      <div className='hero-description'>
      <span className="topic">Think Tech, Choose Us</span>
      <span className='topic-1'>Digital product & <br />marketing that grow <br />Nepali brands</span>
      <p>FourBit builds fast websites, useful apps and campaigns that convert. We <br />ship reliably and measure what matters.</p>
     
     
     <div className='buttons'>
      <button className='btn primary'>Start a Project →</button>
      <button className='btn secondary'>See Our Work</button>
</div>
<div className='features'>
  <span>🛡 Warranty 5–10 yrs</span>
  <span>⚡ On-time delivery</span>

</div>
 </div>







      <div className='hero-services'>
        <div className="services-box">
        <div className="service">🌐 Web</div>
        <div className="service">📱 App</div>
        <div className="service">💻 Software</div>
        <div className="service">📢 Marketing</div>
        <div className="service">🚀 Launch</div>
        <div className="service">📈 Scale</div>

</div>
      </div>
    </div>
  )
}
