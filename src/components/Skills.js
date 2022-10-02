import * as React from "react";
import SkillTube from "./SkillTube";
import * as styles from "../styles/Skills.module.scss";

const Skills = () => {
    const [hidden,setHidden] = React.useState(false)
    return (
        <section>
           <div className={`${styles.container} ${hidden && styles.hidden}`}>
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