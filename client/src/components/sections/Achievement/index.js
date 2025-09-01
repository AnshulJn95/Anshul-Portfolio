import "./achievement.scss"

// Icons
import {
  FaTrophy,
  FaMedal,
  FaRegNewspaper,
  FaMapMarkedAlt,
  FaAngleRight,
} from "react-icons/fa"

const Achievement = () => {
  return (
    <>
      <div className="about-bg">
        <section id="achievement" className="about-section">
          <div className="grid1">
            {/* Achievements List */}
            <div className="left-section">
              <div data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">
                <h2>Achievements</h2>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <p><FaAngleRight /> <strong>Dean's List Excellence Award:</strong> Maintained the highest grade average for 6 consecutive semesters.</p>
                <p><FaAngleRight /> <strong>CGPA 9.85:</strong> Computer & Communication Engineering, Manipal University Jaipur.</p>
                <p><FaAngleRight /> <strong>Best Delegate Award:</strong> Salwan Model United Nations, May 2019.</p>
                <p><FaAngleRight /> <strong>Core Team, CyberSpace Web Dev:</strong> Manipal University Jaipur.</p>
                <p><FaAngleRight /> <strong>Internships:</strong> Siemens (Bangalore), Acuvre Consulting (Bangalore), College of Aviation Technology (Dhaka).</p>
                <p><FaAngleRight /> <strong>Certified:</strong> Advanced C++ Programming, Machine Learning, Data Science.</p>
                <p><FaAngleRight /> <strong>DSA Practice:</strong> Solved 250+ Data Structures & Algorithms problems online.</p>
              </div>
            </div>

            {/* Projects Display */}
            <div className="right-section">
              <h2>Project Highlights</h2>
              <div className="tech-icons-grid">
                <div className="item">
                  <FaRegNewspaper />
                  <div className="icon-label">NewsInsight</div>
                  <div className="project-detail">
                    AI platform for news summarization, sentiment analysis, dashboards.
                  </div>
                </div>
                <div className="item">
                  <FaMapMarkedAlt />
                  <div className="icon-label">GPS Attendance System</div>
                  <div className="project-detail">
                    Location-based attendance (React/Node/MongoDB), live tracking dashboard.
                  </div>
                </div>
                <div className="item">
                  <FaTrophy />
                  <div className="icon-label">MegaBlog Platform</div>
                  <div className="project-detail">
                    Full-stack blog with rich editor, secure auth, RBAC, live updates.
                  </div>
                </div>
                <div className="item">
                  <FaMedal />
                  <div className="icon-label">Braille Converter</div>
                  <div className="project-detail">
                    Automated document-to-Braille tool using Python, ML, OCR.
                  </div>
                </div>
              </div>

              <h2 style={{ fontSize: "1.6em", margin: 0, color: "#FF7C1A" }}>Connect</h2>
              <div className="contact-info">
                <p>
                  <FaAngleRight /> <strong>LinkedIn:</strong>{" "}
                  <a href="https://www.linkedin.com/in/anshul-jain" target="_blank" rel="noopener noreferrer">anshul-jain</a>
                </p>
                <p>
                  <FaAngleRight /> <strong>GitHub:</strong>{" "}
                  <a href="https://github.com/AnshulJn95" target="_blank" rel="noopener noreferrer">AnshulJn95</a>
                </p>
                <p>
                  <FaAngleRight /> <strong>Email:</strong>{" "}
                  <a href="mailto:anshulthegreat958@gmail.com">anshulthegreat958@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* curve SVG stays unchanged */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Achievement
