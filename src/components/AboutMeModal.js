import * as React from "react";
import { differenceInCalendarYears } from "date-fns";
import * as styles from "../styles/AboutMeModal.module.scss";

const AboutMeModal = ({open, onClose}) => {
    const today = new Date();
    const birthday = new Date('1995-02-14');
    const age = differenceInCalendarYears(today, birthday);

    return (
        <div className={`${styles.backdrop} ${open ? styles.open : ''}`} onClick={onClose}>
            <div className={styles.modal} onClick={(event) => {event.stopPropagation()}}>
                <div>Seul Kim</div>
                <div className={styles.infoRow}>
                    <div>Age</div>
                    <div>{age}</div>
                </div>
                <div className={styles.infoRow}>
                    <div>E-mail</div>
                    <div>seul14295@gmail.com</div>
                </div>
                <div className={styles.infoRow}>
                    <div>Education</div>
                    <ul className={styles.education}>
                        <li>school</li>
                        <li>university</li>
                        <li>work</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMeModal;