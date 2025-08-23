import Hero from '@/components/Hero/Hero';
import Map from '@/components/Map/Map';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.content}>
        <h2>About the Tour</h2>
        <p>
          Preregister Online at BikeReg.com. Online registration closes midnight, Thursday, April
          10, 2025. Race day registration $10 additional, so per-register! Riders without USAC Road
          licenses race as Cat. 5, 40+, Women as appropriate. NOTE: Riders are not required to
          finish the prior race to start the next,but will be ineligible for GC prizes. Riders may
          register for only one day, but will be ineligible for GC prizes. Riders wishing to race a
          second criterium race for which they are eligible may do so for $10 additional. NOBC
          members race free. Race day registration and number pick-up opens at 7:30 a.m. and closes
          at 8:30 a.m. at Oak Grove Baptist Church,19840 Lee Road Franklinton, LA 70438.
        </p>
      </div>
      <div className={styles.maps}>
        <Map />
      </div>
    </div>
  );
}
