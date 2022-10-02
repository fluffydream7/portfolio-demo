import * as React from "react";
import * as styles from "../styles/Skills.module.scss";

const SkillTube = (props) => {
    return (
        <div className={styles.tubeBox}>
            <div className={styles.tube}>
                <div style={{opacity: props.score, height: `${props.score * 100}%`}} className={styles.percentage}>{props.score * 100}%</div>
            </div>
            <div className={styles.label}>
                {props.name}
            </div>
        </div>
    );
}

export default SkillTube;