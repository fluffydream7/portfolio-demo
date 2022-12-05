import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/AboutMe.module.scss";

const AboutMe = () => {
    return (
        <section id="aboutMe" className={styles.aboutMe}>
            <div className={styles.container}>
                <StaticImage
                    src='../images/profile.png'
                    width={300}
                    height={300}
                    alt="profile image"
                />
                <div className={styles.info}>
                    <div>
                        <div className={styles.infoRow}>
                            1995.02.14
                        </div>
                        <div className={styles.infoRow}>
                            New Bulgarian University
                        </div>
                        <div className={styles.infoRow}>
                            이젠컴퓨터아카데미 : <br/>
                            UXUI 웹/앱 디자인 수료
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hello}>
                <div className={styles.name}>
                    Hi! I'm Seul Kim.
                </div>
                <div>
                    안녕하세요!
                    무한한 가능성을 가지고 있는
                    신입 퍼블리셔 김슬입니다.
                </div>
            </div>
                    {/* <div className={styles.infoRow}>
                        <div className={styles.label}>Name</div>
                        <div>Seul Kim</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Age</div>
                        <div>{age}</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Education</div>
                        <div>New Bulgarian University</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>E-mail</div>
                        <div>seul14295@gmail.com</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.label}>Other</div>
                        <div>Fluent in English</div>
                    </div> */}
        </section>
    );
};

export default AboutMe;