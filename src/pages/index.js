import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import NavigationButton from "../components/NavigationButton";
import * as styles from "../styles/page.module.scss";
import "../styles/index.css";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.title}>
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </div>
        <div className={styles.dot}></div>
      </div>
      <header className={styles.header}>
        <div>seulkim</div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebook}  size="xl"/>
          <FontAwesomeIcon icon={faTwitter}  size="xl"/>
          <FontAwesomeIcon icon={faEnvelope}  size="xl"/>
        </div>
      </header>
      <aside className={styles.sideMenu}>
        <NavigationButton description="About Me"/>
        <NavigationButton description="Skills"/>
        <NavigationButton description="Portfolio"/>
        <NavigationButton description="Contact"/>
      </aside>
      <main className={styles.main}>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
