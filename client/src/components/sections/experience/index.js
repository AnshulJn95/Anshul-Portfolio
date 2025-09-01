import "./experience.scss"

const Experience = () => {
  return (
    <>
      <div className="experience-bg">
        <section id="experience" className="experience-section">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2>
              <span>Education</span>
            </h2>
          </div>

          <ul className="list">
            <li className="list-item">
              <div className="format-odd">
                <div className="left-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="calendar-year">B-Tech</div>
                  </div>
                </div>
                <div className="right-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="line-horizontal"></div>
                  </div>

                  <div
                    className="panel radius"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="logo">
                      <img
                        src={
                          window.location.origin + "/assets/logo/Manipal.jpeg"
                        }
                        alt="Manipal University Jaipur"
                      ></img>
                    </div>
                    <div className="descriptions">
                      <div className="years">2022 - 2026</div>
                      <div className="title">
                        Manipal University Jaipur<br/> Rajasthan, India
                      </div>
                      <div className="company-name">
                        Bachelor of Technology in Computer and Communication Engineering<br/>
                        <strong>CGPA: 9.86</strong> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="format-even">
                <div className="left-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="calendar-year">Class-XII</div>
                  </div>
                </div>
                <div className="right-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="line-horizontal"></div>
                  </div>

                  <div
                    className="panel radius"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="logo">
                      <img
                        src={
                          window.location.origin +
                          "/assets/logo/Salwan.png"
                        }
                        alt="Salwan Public School"
                      ></img>
                    </div>
                    <div className="descriptions radius">
                      <div className="years">2021 - 2022</div>
                      <div className="title">Salwan Public School<br/>Gurgaon, Haryana</div>
                      <div className="company-name">
                        Senior Secondary (XII) - Science Stream<br/>
                        <strong>Percentage: 90%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="format-odd">
                <div className="left-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="calendar-year">Class-X</div>
                  </div>
                </div>
                <div className="right-content">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="line-horizontal"></div>
                  </div>

                  <div
                    className="panel radius"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-back"
                    data-aos-once="true"
                  >
                    <div className="logo">
                      <img
                        src={
                          window.location.origin + "/assets/logo/Salwan.png"
                        }
                        alt="Salwan Public School"
                      ></img>
                    </div>
                    <div className="descriptions">
                      <div className="years">2019- 2020</div>
                      <div className="title">
                        Salwan Public School<br/>Gurgaon, Haryana
                      </div>
                      <div className="company-name">
                        Secondary School (X)<br/>
                        <strong>Percentage: 94%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <div
              className="line-vertical"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-out-back"
              data-aos-once="true"
            ></div>
          </ul>
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

export default Experience
