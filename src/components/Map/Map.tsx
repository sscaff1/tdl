import styles from './Map.module.css';

const stage1Description = (
  <div className={styles.raceInfo}>
    <p className={styles.description}>
      9:00 a.m. Saturday: 17-mile loop in the rolling hills near Franklinton. Course is open to
      traffic. Park <strong>only</strong> in designated areas! USAC Championship Medals 3 deep for
      top 3 LAMBRA riders - See Below. Women will race with Masters for the Road Race, but will be
      scored separately.
    </p>

    <h3 className={styles.sectionTitle}>LAMBRA Road Championship</h3>
    <p className={styles.subtitle}>
      USAC championship medals will be awarded to the top 3 USAC licensed riders from
      Louisiana/Mississippi as follows:
    </p>

    <ul className={styles.raceList}>
      <li>
        <strong>Cat. 1/2/3/4 Race</strong> LAMBRA championship for Cat 1/2, Cat. 3, and Cat. 4.
      </li>
      <li>
        <strong>Cat. 4/5 Race</strong> LAMBRA championship for Cat 5 only.
      </li>
      <li>
        <strong>Master-40+ Race</strong> LAMBRA championship for 40+ and 55+.
      </li>
      <li>
        <strong>Women Open Race</strong> LAMBRA championship for Cat. 1/2/3 and Cat. 4/5.
      </li>
    </ul>
  </div>
);

const stage2Description = (
  <div className={styles.raceInfo}>
    <p className={styles.description}>
      1:00 p.m. Saturday: 3 mi., (same location as road race). Riders start at 30-second intervals.
      Course will be open to traffic.
    </p>

    <div className={styles.importantNote}>
      <strong className={styles.importantLabel}>Important:</strong> Time trial is mass-start legal
      bikes only (No aero bars).
      <span className={styles.mapReference}></span>
    </div>
  </div>
);

const stage3Description = (
  <div className={styles.raceInfo}>
    <p className={styles.description}>
      8:00 am Sunday: Lakeshore High School, 26301 LA-1088, Mandeville, LA 70448. Please see the
      Race Bible for course and parking details. Women will be combined with Masters but scored
      separately if fewer than five.
    </p>

    <h3 className={styles.sectionTitle}>Race Schedule</h3>
    <ul className={styles.scheduleList}>
      <li>
        <strong>8:00 am</strong> Women, 30 min.
      </li>
      <li>
        <strong>8:45 am</strong> Master 40+, 40 min.
      </li>
      <li>
        <strong>9:45 am</strong> Category 4/5, 40 min.
      </li>
      <li>
        <strong>10:45 am</strong> Category 1/2/3/4, 50 min.
      </li>
    </ul>
  </div>
);

const maps = [
  {
    name: 'Stage 1 - Road Race',
    id: '2271922',
    description: stage1Description,
  },
  {
    name: 'Stage 2 - Time Trial',
    id: '2642900',
    description: stage2Description,
  },
  {
    name: 'Stage 3 - Criterium',
    id: '2913154',
    description: stage3Description,
  },
];

function Map() {
  return (
    <div>
      <h1 className={styles.title}>Schedule & Maps</h1>
      {maps.map((map) => (
        <div key={map.id}>
          <h3 className={styles.stage}>{map.name}</h3>
          <div className={styles.stageWrapper}>
            <div className={styles.description}>{map.description}</div>
            <div className={styles.wrap}>
              <div className={styles.root} />
              <iframe
                name={`plotaroute_map_${map.id}`}
                src={`https://www.plotaroute.com/embedmap/${map.id}?units=miles&hills=show`}
                className={styles.map}
                scrolling="no"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Map;
