import React from 'react'
import { testimonials } from '../data/data'
export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>
            <div className="testimonials">
                {testimonials.map(item => {
                    return (
                        <div key={item.id} className="testimonial">
                            <h5>Rating: {item.rating} <img src={require('../../images/star-rating-icon.jpg')} alt='Star icon' width='20px' /></h5>
                            <div className="profile">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                            <p>{item.testimonial}</p>
                        </div>
                    )
                })}
            </div>
    </section>
  )
}
