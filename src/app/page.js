'use client'; 
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios'; 

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/cards'); 
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.App}>
      {loading ? <p>Loading...</p> : (
        <div className={styles.cardContainer}>
          <div className={styles.cards}>
            {cards.map((crd) => (
              <div className={styles.card} key={crd.id}>
                <div className={styles.cardHeader}>
                  <img src={crd.PROVIDER_LOGO} alt="Logo" className={styles.logo} />
                  <div className={styles.compare}>
                    <input type="checkbox" id={`compare-${crd.id}`} />
                    <label htmlFor={`compare-${crd.id}`}>Compare</label>
                  </div>
                </div>
                <div className={styles.cardTitle}>{crd.OURPACKAGE}</div>
                <p className={styles.description}>{crd.TEST_NAME}</p>
                <p className={styles.testsCount}>{crd.TEST_COUNT} Tests</p>
                <div className={styles.priceSection}>
                  <p className={styles.price}>₹{crd.OFFER_PRICE}/-</p>
                  <p className={styles.discount}>
                    {Math.round(((crd.ACT_PRICE - crd.OFFER_PRICE) / crd.ACT_PRICE) * 100)}% Off <span className={styles.strike}>₹{crd.ACT_PRICE}</span>
                  </p>
                </div>
                <p className={styles.fasting}>
                  {crd.FASTING_FLAG === 'CF' ? 'Fasting Not Required' : 'Fasting Required'}
                </p>
                <button className={styles.addToCart}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/shopping-cart.png" alt="Cart" className={styles.image1} />
                    <img src="/images/shopping-cart.png" alt="Checked" className={styles.image2} />
                  </div>
                  ADD
                </button>
                <div className={styles.certifications}>
                  <img src="/images/Iso.png" alt="ISO" />
                  <img src="/images/cap.png" alt="CAP Accredited" />
                  <img src="/images/Nabl.png" alt="NABL" />
                  <img src="/images/ngsp.jpg" alt="NGSP" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
