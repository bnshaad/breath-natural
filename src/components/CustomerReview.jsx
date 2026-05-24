import { reviews } from "../data/plants";
import "./CustomerReview.css";

function Stars({ count }) {
  return (
    <div className="review-stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= count ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

export default function CustomerReview() {
  return (
    <section className="customer-review" id="reviews">
      <div className="container">
        <h2 className="section-heading customer-review__heading">Customer Review</h2>
        <div className="customer-review__grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-card__top">
                <img src={r.avatar} alt={r.name} className="review-card__avatar" />
                <div>
                  <h4 className="review-card__name">{r.name}</h4>
                  <Stars count={r.rating} />
                </div>
              </div>
              <p className="review-card__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
