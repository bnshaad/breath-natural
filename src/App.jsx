import { useCallback, useEffect, useRef, useState } from "react";
import "./styles/globals.css";
import { fallbackPlants, getPlants } from "./api/plants";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import TrendyPlants   from "./components/TrendyPlants";
import TopSelling     from "./components/TopSelling";
import CustomerReview from "./components/CustomerReview";
import O2Plants       from "./components/O2Plants";
import Footer         from "./components/Footer";

export default function App() {
  const [plants, setPlants] = useState(fallbackPlants);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  useEffect(() => {
    let isMounted = true;

    getPlants().then((data) => {
      if (isMounted) {
        setPlants(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(toastTimer.current);
  }, []);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2400);
  }, []);

  const handleAddToCart = useCallback((plant) => {
    setCartCount((count) => count + 1);
    showToast(`${plant.name} added to bag`);
  }, [showToast]);

  const handleBuyNow = useCallback(() => {
    setCartCount((count) => count + 1);
    showToast("Calathea Plant is ready for checkout");
  }, [showToast]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Hero onBuyNow={handleBuyNow} />
        <TrendyPlants plants={plants.trendyPlants} onAddToCart={handleAddToCart} />
        <TopSelling plants={plants.topSelling} onAddToCart={handleAddToCart} />
        <CustomerReview />
        <O2Plants />
      </main>
      <Footer />
      <div className={`toast${toast ? " toast--visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
