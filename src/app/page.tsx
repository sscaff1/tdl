import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.content}>
        <h2>About the Tour</h2>
        <p>The Tour de Louisiana is a cycling race that takes place in Louisiana.</p>
      </div>
    </div>
  );
}
