import { useState } from "react";
import { o2Slides } from "../data/plants";
import "./O2Plants.css";

export default function O2Plants() {
  const [idx, setIdx] = useState(0);
  const total = o2Slides.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const slide = o2Slides[idx];

  return (
    <section className="o2" id="contact">
      <div className="container">
        <div className="o2__inner">

          {/* Left: text */}
          <div className="o2__content">
            <h2 className="o2__title">Our Best o2</h2>
            <h3 className="o2__subtitle">{slide.title}</h3>
            <p className="o2__desc">{slide.desc1}</p>
            <p className="o2__desc o2__desc--2">{slide.desc2}</p>
            <a href="#plant-types" className="btn-dark o2__btn">Explore</a>
          </div>

          {/* Right: Image + nav */}
          <div className="o2__visual">
            <div className="o2__img-wrap">
              <img src={slide.image} alt={slide.title} className="o2__img" key={idx} />
            </div>

            {/* Arrow nav + counter */}
            <div className="o2__nav">
              <button className="o2__arrow" onClick={prev} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="o2__counter">
                {String(idx + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
              <button className="o2__arrow" onClick={next} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
