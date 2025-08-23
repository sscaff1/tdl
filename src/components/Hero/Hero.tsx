import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.side}>
        <h1>Tour de Louisiane</h1>
        <p>55th Annual Stage Race and LAMBRA Road Championship</p>
        <a
          href="https://www.bikereg.com/tour-de-louisiane-stage-race"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.callToAction}
        >
          Register Now
        </a>
      </div>
      <div className={styles.side}>
        <img src="/images/lambra_logo.png" alt="Tour de Louisiane" />
      </div>
    </div>
  );
}

export default Hero;
