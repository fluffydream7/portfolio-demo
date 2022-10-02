import * as React from "react";
import * as styles from "../styles/Contact.module.scss"

const Contact = () => {
    return (
        <section>
            <div className={styles.container}>
                <h2>Contact Me</h2>
                <div className={styles.form}>
                    <div className={styles.table}>
                        <div>Name</div>
                        <input id="name"/>
                        <div>E-mail</div>
                        <input id="email"/>
                        <div>Phone no.</div>
                        <input id="phoneno" placeholder="'-'포함 입력하세요"/>
                        <div>Message</div>
                        <textarea id="message"/>
                    </div>
                    <button>보내기</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;