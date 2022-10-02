import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import clxs from "clsx";
import * as styles from "../styles/Projects.module.scss";
console.log(styles)

const Projects = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={clxs(styles.device, styles.imac)}>
                    <StaticImage
                        className={styles.frame}
                        src={'../images/imac.png'}
                        width={400}
                        alt="imac frame"
                    />
                    <div className={styles.screen}></div>
                </div>
                <div className={clxs(styles.device, styles.ipad)}>
                    <StaticImage
                        className={styles.frame}
                        src={'../images/ipad.png'}
                        width={200}
                        alt="imac frame"
                    />
                    <div className={styles.screen}></div>
                </div>
                <div className={clxs(styles.device, styles.iphone)}>
                    <StaticImage
                        className={styles.frame}
                        src={'../images/iphone.png'}
                        width={100}
                        alt="imac frame"
                    />
                    <div className={styles.screen}></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;