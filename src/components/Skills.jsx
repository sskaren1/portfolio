// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faGulp,
  faGit,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
// Importando estilos
import "../styles/layouts/skills.scss";
// Importando datos skills
import skillDb from "./../assets/data/skillDb.js";
// Importando imagen
import tailwind from "./../assets/image/tailwind.svg";
import antDesign from "./../assets/image/ant-design.svg";
import django from "./../assets/image/django.svg";

const Skills = () => {
  return (
    <>
      <section className="skill" id="skill">
        <div className="skill__container">
          <h2>Skills</h2>
          <div className="skills">
            {skillDb.map((skill, index) => (
              <div className="skill__icons" key={index}>
                <FontAwesomeIcon icon={skill.icon} />
                <h3>{skill.skillName}</h3>
              </div>
            ))}
            <div className="skill__icons">
              <img src={tailwind} />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="skill__icons">
              <img src={antDesign} />
              <h3>Ant design</h3>
            </div>
            {/* <div className="skill__icons">
              <img src={django} />
              <h3>Django</h3>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
