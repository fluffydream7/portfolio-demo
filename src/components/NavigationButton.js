import * as React from "react";
import * as styles from "../styles/NavigationButton.module.scss";

const NavigationButton = (props) => {
    return (
        <div className={styles.button} onClick={props.onClick}>
            <div></div>
            <div className={styles.description}>{props.description}</div>
        </div>
    );
};

export default NavigationButton;