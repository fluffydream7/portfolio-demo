import * as React from "react";
import { differenceInCalendarYears } from "date-fns";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/AboutMe.module.scss";

const AboutMe = () => {
    const today = new Date();
    const birthday = new Date('1995-02-14');
    const age = differenceInCalendarYears(today, birthday);

    return (
        <section>
            <div className={styles.container}>
                <StaticImage
                    src='../images/profile.png'
                    width={250}
                    height={250}
                    alt="profile image"
                />
                <div className={styles.info}>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Name</div>
                        <div>Seul Kim</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Age</div>
                        <div>{age}</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>E-mail</div>
                        <div>seul14295@gmail.com</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Education</div>
                        <ul className={styles.education}>
                            <li>school</li>
                            <li>university</li>
                            <li>work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;