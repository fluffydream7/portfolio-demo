import * as React from "react";
import SkillTube from "./SkillTube";
import * as styles from "../styles/Skills.module.scss";
import useOnScreen from "../utills/useOnScreen";

const Skills = () => {
    const ref = React.useRef();
    const onScreen = useOnScreen(ref, '-100px');
    
    return (
        <section id="skills" className={styles.skills} ref={ref}>
           <div className={`${styles.container} ${!onScreen && styles.hidden}`}>
            <SkillTube name='Photoshop' score={0.75}/>
            <SkillTube name='Illustrator' score={0.5}/>
            <SkillTube name='HTML' score={0.85}/>
            <SkillTube name='CSS' score={0.80}/>
            <SkillTube name='JavaScript' score={0.60}/>
            <SkillTube name='jQuery' score={0.5}/>
           </div>
        </section>
    );
};

export default Skills;