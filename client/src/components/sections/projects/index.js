import "./projects.scss"
import ProjectItem from "./ProjectItem"
import { BsGithub } from "react-icons/bs"
import { RiShareBoxFill } from "react-icons/ri"

const Projects = () => {
  return (
    <>
      <div className="project-bg">
        {/* svg line curve */}
        <div className="curve1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        <section id="project" className="project-section">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2>
              My <span>Projects</span>
            </h2>
          </div>

          <div className="project-list-grid">
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project1.png"
              }
              title="NewsInsight"
              description="AI-powered news analysis platform built with Python, LangChain, Streamlit, and OpenAI. Features article summarization, sentiment analysis, automated categorization, and interactive dashboards for academic and social insight."
              technology={["ReactJS", "NodeJS", "MongoDB", "ExpressJS"]}
              links={
                <a href="https://github.com/AnshulJn95/NewsInsight" title="Github">
                  <BsGithub />
                </a>
              }
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project2.png"
              }
              title="Portfolio"
              description="Personal developer portfolio showcasing skills, projects, and achievements. Built with React, Node, and Express; features dynamic project sections, smooth animations, and a modern SCSS-powered design."
              technology={["ReactJS", "NodeJS", "Express", "SCSS"]}
              links={
                <a href="https://github.com/AnshulJn95/Anshul-Portfolio" title="Github">
                  <BsGithub />
                </a>
              }
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/project3.png"
              }
              title="Get Together"
              description="Cross-platform social media app leveraging React Native, NodeJS, and Firebase. Includes email/social authentication (Google, Facebook), real-time posting, profile management, and secure cloud data sync. Live version available."
              technology={["React-Native", "NodeJS", "Firebase"]}
              live={
                <a href="https://blog-kappa-beige-67.vercel.app" title="Live Demo">
                  <RiShareBoxFill />
                </a>
              }
              links={
                <a href="https://github.com/AnshulJn95/MegaBlog" title="Github">
                  <BsGithub />
                </a>
              }
              delay={200}
            />
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve2">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Projects
