import styles from './Map.module.css';

const maps = [
  {
    name: 'Stage 1 - Road Race',
    id: '2271922',
    description: `
      9:00 a.m. Saturday: 17-mile loop in the rolling hills near Franklinton. Course is open to traffic. (See map in race program). Park ONLY in designated areas! USAC Championship Medals 3 deep for top 3 LAMBRA riders - See Below. Women will race with Masters for the Road Race, but will be scored separately.
[SEE MAP]

LAMBRA Road Championship: USAC championship medals will be awarded to the top 3 USAC licensed riders from Louisiana/Mississippi as follows:

Cat. 1/2/3/4 Race - LAMBRA championship for Cat 1/2, Cat. 3, and Cat. 4.
Cat. 4/5 Race - LAMBRA championship for Cat. 5 only.
Master-40+ Race - LAMBRA championship for 40+ and 55+.
Women Open Race - LAMBRA championship for Cat. 1/2/3 and Cat. 4/5.`,
  },
  {
    name: 'Stage 2 - Time Trial',
    id: '2642900',
    description: `1:00 p.m. Saturday: 3 mi., (same location as road race). Riders start at 30-second intervals. Course will be open to traffic. NOTE: TIME TRIAL IS MASS-START LEGAL BIKES ONLY (No aero bars). [SEE MAP]`,
  },
  {
    name: 'Stage 3 - Criterium',
    id: '2913154',
    description: `8:00 am Sunday: Lakeshore High School, 26301 LA-1088, Mandeville, LA 70448. Please see the Race Bible for course and parking details. Women will be combined with Masters but scored separately if fewer than five.

8:00 am - Women, 30 min.
8:45 am - Master 40+, 40 min.
9:45 am - Category 4/5, 40 min.
10:45 am - Category 1/2/3/4, 50 min.`,
  },
];

function Map() {
  return (
    <div>
      <h2 className={styles.title}>Course Maps</h2>
      {maps.map((map) => (
        <div key={map.id}>
          <h3 className={styles.stage}>{map.name}</h3>
          <p className={styles.description}>{map.description}</p>
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
      ))}
    </div>
  );
}

export default Map;
