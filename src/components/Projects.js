import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Slide } from "react-slideshow-image";
import clxs from "clsx";
import * as styles from "../styles/Projects.module.scss";
import ProjectSlide from "./ProjectSlide";

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div className={styles.circle4}></div>
            <div className={styles.circle5}></div>
            <div className={styles.circle6}></div>
            <div className={styles.slideContainer}>
                <Slide>
                    <ProjectSlide 
                        title="Dunkin Renewal"
                        tech="코딩 : HTML/ CSS/ jQuery"
                        description={(
                            <>
                                던킨 도너츠 사이트를 반응형으로 리뉴얼, <br/>
                                기존 페이지와 다른 효과도 주었습니다. <br/>
                                메인/ 로그인/ 회원가입/ 메뉴페이지 <br/> 
                            </>
                        )}
                        pcImage={styles.dunkinPc}
                        tabletImage={styles.dunkinTablet}
                        mobileImage={styles.dunkinMobile}
                    />
                    <ProjectSlide 
                        title="Recipe Mobile Site" 
                        tech="코딩 : HTML/ CSS/ React"
                        description={(
                            <>
                                리엑트 컴포넌트를 사용하고 <br/>
                                MUI 라이브러리를 사용했습니다. <br/>
                                메인메뉴/ 레시피상세/ 부크마크 <br/>
                            </>
                        )}
                        pcImage={styles.recipePc}
                        tabletImage={styles.recipeTablet}
                        mobileImage={styles.recipeMobile}
                    />
                </Slide>
            </div>
        </section>
    );
};

export default Projects;