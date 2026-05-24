import "./TrendyPlants.css";

function TrendyCard({ plant, onAddToCart }) {
  return (
    <div className="trendy-card">
      {/* Image area with rounded background */}
      <div className="trendy-card__img-wrap" style={{ background: plant.bg }}>
        <img src={plant.image} alt={plant.name} className="trendy-card__img" />
      </div>

      {/* Body — concave top via border-radius */}
      <div className="trendy-card__body">
        <h3 className="trendy-card__name">{plant.name}</h3>
        <p className="trendy-card__desc">{plant.desc}</p>
        <div className="trendy-card__footer">
          <span className="trendy-card__price">{plant.price}</span>
          <div className="trendy-card__actions">
            <button className="trendy-card__explore-btn">Explore</button>
            <button
              className="trendy-card__bag-btn"
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
    </div>
  );
}

export default function TrendyPlants({ plants = [], onAddToCart }) {
  return (
    <section className="trendy" id="plant-types">
      <div className="container">
        <h2 className="section-heading trendy__heading">Our Trendy Plants</h2>
        <div className="trendy__grid">
          {plants.map((p) => (
            <TrendyCard key={p.id} plant={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
