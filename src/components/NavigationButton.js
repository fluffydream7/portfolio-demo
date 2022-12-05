import * as React from "react";
import * as styles from "../styles/NavigationButton.module.scss";

const NavigationButton = (props) => {
    return (
        <div className={styles.button} onClick={() => {
            const target = document.getElementById(props.target);
            target.scrollIntoView({ behavior: 'smooth' });
        }}>
            <div className={styles.description}>{props.description}</div>
        </div>
    );
};

export default NavigationButton;