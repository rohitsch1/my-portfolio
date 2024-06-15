import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import {ProductArray} from "./ProjectData";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {ProductArray.map((val) => (
          <ProjectCard
            key={val.id}
            src={val.src}
            link={val.link}
            h3={val.h3}
            p={val.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
