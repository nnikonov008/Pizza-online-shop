import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            HELLO, WE ARE GLAD TO SEE YOU IN OUR BEAUTIFULL PLACE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            4-th Tverskaya str., 15
            <br /> Moscow, 140180
            <br /> +7(905) ***-**-**
          </p>
          <p className={styles.text}>
            1-th Tverskaya str., 10
            <br /> Moscow, 140180
            <br /> +7(905) ***-**-**
          </p>
          <p className={styles.text}>
            Pokrovskaya str, 21
            <br /> Moscow, 140180
            <br /> +7(905) ***-**-**
          </p>
          <p className={styles.text}>
            Prospect Lomonosova str, 12
            <br /> Moscow, 140180
            <br /> +7(905) ***-**-**
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
