import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
export default function Hero() {
  return (
        // <section className='call-to-action'>
        //   <article>
        //     <h1>Little Lemon</h1>
        //     <h2>Chicago</h2>
        //     <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
        //     on traditional recipes served with a modern twist.</p>
        //     <br></br>
        //     <Link to='/booking'><button type='button' className='button reserve-button'>Reserve a table</button></Link>
        //     </article>
        //     <article className="hero-image">
        //        <img  src={require('../../images/restaurantfood.webp')} alt="Little Lemon "></img>
        //   </article>
        // </section>


    <section id='hero'>
            <article className='hero-left-section'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/booking'><button type='button' className='button reserve-button'>Reserve a table</button></Link>
            </article>
            <article className='hero-image'>
                <img  src={require('../../images/restaurantfood.webp')} width='250px' alt='Resturant waiter holding food' />
            </article>
        </section>
  )
}
