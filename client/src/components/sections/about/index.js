import "./about.scss"

// icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaFigma,
  FaJava,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp, SiMongodb, SiExpress, SiRedux, SiCplusplus, SiPython, SiFirebase } from "react-icons/si"

const About = () => {
  return (
    <>
      <div className="about-bg">
        <section id="about" className="about-section">
          <div className="grid">
            <div className="left-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h2>
                  About <span>Me</span>
                </h2>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Hello, I'm <strong>Anshul Jain</strong>, a Final year Computer and Communication Engineering student at Manipal University Jaipur. I am passionate about software development and thrive on building efficient, impactful solutions. With a consistent 9.86 CGPA and four consecutive Dean's List honors, I combine technical excellence and leadership in every project.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                My strengths include strong problem-solving skills, attention to detail, and a disciplined approach to managing both academics and major tech projects. I have accumulated hands-on industry experience through internships at Acuvre Consulting (Bangalore) and Siemens Technologies, where I collaborated on real-world software delivery challenges.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <ul>
                  <li>Actively learning Machine Learning and Data Science; solved 250+ Data Structures & Algorithms problems on top coding platforms</li>
                  <li>Open to collaboration—especially on AI, accessibility technology, and full-stack web solutions</li>
                  <li>Skilled in project development across both frontend and backend stacks—feel free to reach out about React.js, Node.js, Express, MongoDB, or Python</li>
                  <li>Proficient in Agile team workflows, Git version control, and open-source contribution</li>
                </ul>
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Interested in connecting, collaborating, or discussing ideas? Drop me a message below!
              </p>
            </div>

            <div className="right-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h4>Skills & Technologies</h4>
              </div>
              <div className="tech-icons-grid">
                {/* Row 1 */}
                <div className="item" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
                  <SiPython />
                  <div className="icon-label">Python</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
                  <FaJava />
                  <div className="icon-label">Java</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
                  <SiCplusplus />
                  <div className="icon-label">C++</div>
                </div>
                {/* Row 2 */}
                <div className="item" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="500">
                  <DiMysql />
                  <div className="icon-label">SQL</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
                  <DiJavascript1 />
                  <div className="icon-label">JavaScript</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
                  <FaReact />
                  <div className="icon-label">React.js</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="500">
                  <SiRedux />
                  <div className="icon-label">Redux</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="500">
                  <FaNodeJs />
                  <div className="icon-label">Node.js</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="500">
                  <SiExpress />
                  <div className="icon-label">Express.js</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="500">
                  <SiMongodb />
                  <div className="icon-label">MongoDB</div>
                </div>
                {/* Row 3 */}
                <div className="item" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="500">
                  <SiFirebase />
                  <div className="icon-label">Firebase</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1300" data-aos-duration="500">
                  <FaGit />
                  <div className="icon-label">Git</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="500">
                  <FaFigma />
                  <div className="icon-label">Figma</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="500">
                  <FaHtml5 />
                  <div className="icon-label">HTML5</div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="1600" data-aos-duration="500">
                  <FaCss3Alt />
                  <div className="icon-label">CSS3/SASS</div>
                </div>
              </div>
            </div>

            {/* end of grid div */}
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default About
