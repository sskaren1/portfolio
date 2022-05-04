// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// Importing styles
import "./../styles/layouts/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__site">
          <p className="text-white">Lima, Perú</p>
        </div>
        <div className="follow">
          <a
            href="https://github.com/sskaren1"
            className="follow__icon"
            title="Developer's Github"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/karen-obispo-campos"
            className="follow__icon"
            title="Developer's LinkedIn"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer__copyright">
          <p className="text-white">
            Copyright &copy; 2022 All Rights Reserved - Designed by Karen Obispo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
