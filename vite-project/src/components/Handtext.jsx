import React from 'react';

export default function Handtext() {
  return (
    <section className="handy-header-row">
      <div className="handy-header-left">
        <h2>
          Find your<br />
          Handyman
        </h2>
      </div>
      <nav className="handy-header-filters">
        <ul>
          <li className="active">All</li>
          <li>Plumber</li>
          <li>Builder</li>
          <li>Electrician</li>
        </ul>
      </nav>
    </section>
  );
}