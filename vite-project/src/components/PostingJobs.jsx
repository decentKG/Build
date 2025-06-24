import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import annaImg from '../assets/Ellipse 17.png';
import maryImg from '../assets/Ellipse 17 (1).png';
import tafadzwaImg from '../assets/Ellipse 17 (2).png';

const testimonials = [
  {
    img: annaImg,
    alt: 'Anna.k',
    name: 'Anna.k',
    message:
      `I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!`,
    cardClass: 'anna',
    barClass: '',
  },
  {
    img: maryImg,
    alt: 'Mary. J',
    name: 'Mary. J',
    message:
      `I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!`,
    cardClass: 'mary',
    barClass: 'yellow',
  },
  {
    img: tafadzwaImg,
    alt: 'Tafadzwa. C',
    name: 'Tafadzwa. C',
    message:
      `I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!`,
    cardClass: 'tafadzwa',
    barClass: '',
  },
];

export default function PostingJobs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // For 3 cards, center the active card
  const prevIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (activeIndex + 1) % testimonials.length;
  const centered = [
    testimonials[prevIdx],
    testimonials[activeIndex],
    testimonials[nextIdx],
  ];

  return (
    <section className="testimonial-main-section">
      <div className="testimonial-left-block">
        <h1 className="testimonial-title">What Our<br/>Customers Say</h1>
        <p className="testimonial-desc">
          "Buildlink Zimbabwe has redefined our experience in finding trusted professionals. Homeowners and businesses alike appreciate the seamless connection to reliable experts, transforming projects into reality with confidence and ease".
        </p>
        <button className="testimonial-btn-main">
          <span className="testimonial-btn-text">View more</span>
          <span className="testimonial-btn-icon">
            <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      <div className="testimonial-cards-block-stacked" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        {centered.map((testimonial, idx) => {
          const isActive = idx === 1;
          return (
            <div
              key={testimonial.name}
              className={`testimonial-card-custom ${testimonial.cardClass}`}
              style={
                isActive
                  ? {
                      border: '3px solid #ffb300',
                      borderLeft: '3px solid red',
                      transition: 'border 0.3s, box-shadow 0.3s, transform 0.3s',
                      boxShadow: '0 8px 24px rgba(34,34,34,0.28)',
                      transform: 'translateX(-10px) scale(1.08)',
                      zIndex: 3,
                    }
                  : {}
              }
            >
              <div className={`testimonial-highlight-bar${testimonial.barClass ? ' ' + testimonial.barClass : ''}`}></div>
          <div className="testimonial-content-custom">
                <img src={testimonial.img} alt={testimonial.alt} className="testimonial-profile-image" />
            <div className="testimonial-text-section">
                  <div className="testimonial-name">{testimonial.name}</div>
              <div className="testimonial-message">
                    {testimonial.message}
              </div>
            </div>
                <FaQuoteRight className="testimonial-quote-icon" style={isActive ? { color: '#222' } : {}} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}