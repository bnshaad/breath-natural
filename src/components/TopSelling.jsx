import "./TopSelling.css";

function TopCard({ plant, onAddToCart }) {
  return (
    <div className="top-card">
      <div className="top-card__img-wrap" style={{ background: plant.bg }}>
        <img src={plant.image} alt={plant.name} className="top-card__img" />
      </div>
      <div className="top-card__body">
        <h3 className="top-card__name">{plant.name}</h3>
        <p className="top-card__desc">{plant.desc}</p>
        <div className="top-card__footer">
          <span className="top-card__price">{plant.price}</span>
          <button
            className="top-card__bag-btn"
            aria-label={`Add ${plant.name} to cart`}
            onClick={() => onAddToCart(plant)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopSelling({ plants = [], onAddToCart }) {
  return (
    <section className="top-selling" id="more">
      <div className="container">
        <h2 className="section-heading top-selling__heading">Top Selling</h2>
        <div className="top-selling__grid">
          {plants.map((p) => (
            <TopCard key={p.id} plant={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
