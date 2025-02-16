import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Gym Management System</h1>
          <p>Your all-in-one solution for managing gym members, supplements, and notifications.</p>
          <div className="cta-buttons">
            <Link to="/admin" className="cta-button">Admin Dashboard</Link>
            <Link to="/member" className="cta-button">Member Dashboard</Link>
            <Link to="/user" className="cta-button">User Dashboard</Link>
          </div>
        </div>
      </section>

      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Manage Members</h3>
            <p>Easily add, update, and delete gym members with a simple interface.</p>
          </div>
          <div className="feature-card">
            <h3>Track Supplements</h3>
            <p>Keep track of supplement inventory and sales seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Send Notifications</h3>
            <p>Send instant notifications to members about gym updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;