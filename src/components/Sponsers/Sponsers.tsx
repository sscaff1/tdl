import Image from 'next/image';
import styles from './Sponsers.module.css';

// Sponsor data array
const sponsors = [
  {
    name: 'Bicycle World',
    image: '/images/sponsers/BicycleWorldLogo.jpg',
    website: 'https://www.bicycleworldla.com/',
    alt: 'Bicycle World Logo',
  },
  {
    name: "Roy's Auto Tech",
    image: '/images/sponsers/Roys_200.jpg',
    website: 'https://www.roysautotech.com/',
    alt: "Roy's Auto Tech Transmissions & General Repair Logo",
  },
  {
    name: 'LA Pharmacy',
    image: '/images/sponsers/LaPharmacy_logo_200.jpg',
    website: 'https://www.mylapharmacy.com/',
    alt: 'LA Pharmacy Logo',
  },
  {
    name: 'River Rental Tools',
    image: '/images/sponsers/RRT+Logo+HD200.png',
    website: 'https://www.rrtmax.com/',
    alt: 'River Rental Tools Logo',
  },
  {
    name: 'Bike Law',
    image: '/images/sponsers/badge-la.png',
    website: 'https://www.bikelaw.com/state/louisiana-bicycle-accident-lawyers/',
    alt: 'Bike Law Logo',
  },
  {
    name: 'Apolline Restaurant',
    image: '/images/sponsers/apolline_sign_200.jpg',
    website: 'https://www.apollinerestaurant.com/',
    alt: 'Apolline Restaurant Logo',
  },
  {
    name: 'Gray Cat Cycle Worx',
    image: '/images/sponsers/GrayCat200.png',
    website: 'https://graycatcycle.com/',
    alt: 'Gray Cat Cycle Worx Logo',
  },
];

function Sponsers() {
  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Sponsors</h2>
        <p className={styles.subtitle}>
          Thank you to our generous sponsors who make this event possible
        </p>

        <div className={styles.sponsorsGrid}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label={`Visit ${sponsor.name} website`}
            >
              <div className={styles.sponsorCard}>
                <Image
                  src={sponsor.image}
                  alt={sponsor.alt}
                  width={200}
                  height={200}
                  className={styles.sponsorImage}
                  priority={index < 3} // Prioritize first 3 images
                />
                <span className={styles.sponsorName}>{sponsor.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsers;
