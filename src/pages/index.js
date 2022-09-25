import * as React from "react";
import NavigationButton from "../components/NavigationButton";
import * as styles from "../styles/page.module.scss";
import "../styles/index.css";
import AboutMeModal from "../components/AboutMeModal";

const IndexPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <span>K</span>
          <span>I</span>
          <span>M</span>
          <span>S</span>
          <span>E</span>
          <span>U</span>
          <span>L</span>
        </div>
        <div className={styles.dot}></div>
        <section className={styles.content}>
          <NavigationButton description="Dunkin Donuts"/>
          <NavigationButton description="Mobile Site"/>
          <NavigationButton description="About ME" onClick={() => {setModalOpen(true)}}/>
        </section>
      </main>
      <AboutMeModal open={modalOpen} onClose={() => {setModalOpen(false)}}/>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
