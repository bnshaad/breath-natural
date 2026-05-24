import "./Hero.css";

export default function Hero({ onBuyNow }) {
  return (
    <section className="hero" id="hero">
      {/* Background large decorative shape */}
      <div className="hero__bg-shape" />

      <div className="hero__inner container">

        {/* ── Left Content ── */}
        <div className="hero__content">
          <h1 className="hero__title">Breath<br />Natureal</h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hero__actions">
            <a href="#plant-types" className="btn-dark hero__explore-btn">
              Explore
            </a>
            <a href="#demo" className="hero__demo-link">
              <span className="hero__demo-dot" />
              Live Demo...
            </a>
          </div>

          {/* Review snippet card — bottom of left column */}
          <div className="hero__review-card">
            <div className="hero__review-plant">
              <img
                src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=80&q=80"
                alt="Calathea"
                className="hero__review-plant-img"
              />
              <div>
                <p className="hero__review-tag">Trendy House Plant</p>
                <p className="hero__review-name">Calathea plant</p>
              </div>
            </div>
            <button className="btn-dark hero__buy-btn" onClick={onBuyNow}>Buy Now</button>

            <div className="hero__review-author">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&q=80"
                alt="Alena Patel"
                className="hero__review-avatar"
              />
              <div>
                <p className="hero__review-author-name">alena Patel</p>
                <div className="hero__stars">★★★★<span>★</span></div>
              </div>
              <p className="hero__review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>
        </div>

        {/* ── Right: Plant Image ── */}
        <div className="hero__visual">
          {/* Large circle bg */}
          <div className="hero__circle" />
          {/* Main plant image */}
          <img
            src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=700&q=85"
            alt="Breath Natural Plant"
            className="hero__plant-img"
          />
          {/* Decorative small circle */}
          <div className="hero__circle-sm" />
        </div>
      </div>
    </section>
  );
}
