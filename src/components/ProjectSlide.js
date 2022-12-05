import * as React from "react";
import * as styles from "../styles/Projects.module.scss";
import 'react-slideshow-image/dist/styles.css';
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";

const ProjectSlide = (props) => {
    return (
        <div className={styles.container}>
            <div className={clsx(styles.device, styles.imac)}>
                <StaticImage
                    className={styles.frame}
                    src={'../images/imac.png'}
                    width={400}
                    alt="imac frame"
                />
                <div className={clsx(styles.screen, props.pcImage)}></div>
            </div>
            <div className={clsx(styles.device, styles.ipad)}>
                <StaticImage
                    className={styles.frame}
                    src={'../images/ipad.png'}
                    width={200}
                    alt="imac frame"
                />
                <div className={clsx(styles.screen, props.tabletImage)}></div>
            </div>
            <div className={clsx(styles.device, styles.iphone)}>
                <StaticImage
                    className={styles.frame}
                    src={'../images/iphone.png'}
                    width={100}
                    alt="imac frame"
                />
                <div className={clsx(styles.screen, props.mobileImage)}></div>
            </div>
            <div className={styles.projectSlide}>
                <p className={styles.projectTitle}>
                    {props.title}
                </p>
                <div className={styles.aboutProject}>
                    <p>
                        {props.tech}
                    </p>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide;