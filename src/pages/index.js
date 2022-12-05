import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import NavigationButton from "../components/NavigationButton";
import * as styles from "../styles/page.module.scss";
import 'react-slideshow-image/dist/styles.css';
import "../styles/index.css";
import clsx from "clsx";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  const ref = React.useRef();
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => { 
    if (!ref.current) return;
    ref.current.addEventListener('scroll', () => {
      setScrolled(ref.current.scrollTop > 400);
    });
  },[ref]);

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
      <div className={styles.arrows}>
        <FontAwesomeIcon icon={faChevronDown} className={styles.arrow}/>
      </div>
      <header className={clsx(styles.header, {[styles.scrolled]: scrolled})}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebook}  size="xl"/>
          <FontAwesomeIcon icon={faTwitter}  size="xl"/>
          <FontAwesomeIcon icon={faEnvelope}  size="xl"/>
        </div>
        <div className={styles.links}>
          <NavigationButton description="About Me" target="aboutMe" />
          {/* <NavigationButton description="Skills" target="skills" /> */}
          <NavigationButton description="Portfolio" target="projects" />
          <NavigationButton description="Contact" target="contact" />
        </div>
      </header>
      <main className={styles.main} ref={ref}>
        <AboutMe />
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
