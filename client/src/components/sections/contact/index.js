import "./contact.scss"
import MyLinks from "../../svg/MyLinks"
import { AiOutlineCopy } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import ContactUs from "../contactus/contactus"

const Contact = () => {
  const emojis = ["😁", "😎", "🤗", "🧐", "😇", "👌", "👋", "🤟", "🤝"]
  const myEmailAddress = "anshulthegreat958@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmailAddress)
    toast(
      `${emojis[Math.floor(Math.random() * emojis.length)]} Email successfully Copied.`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      }
    )
  }

  return (
    <>
      <div className="contact-bg">
        <section id="contact" className="contact-section">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <h2>
              Let's <span>Connect</span>
            </h2>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              style={{
                textAlign: "center", 
                marginBottom: "30px", 
                fontSize: "1.1rem",
                color: "#666"
              }}
            >
              I'm always excited to discuss new opportunities, innovative projects, 
              or potential collaborations. Whether you're looking for a dedicated 
              developer or want to chat about technology, feel free to reach out!
            </p>

            <div 
              className="email-section"
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                gap: "15px"
              }}
            >
              <span style={{fontSize: "1.1rem", fontWeight: "500"}}>
                {myEmailAddress}
              </span>
              <button 
                onClick={handleCopyEmail}
                style={{
                  background: "transparent",
                  border: "2px solid #0070f3",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#0070f3",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#0070f3"
                  e.target.style.color = "white"
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent"
                  e.target.style.color = "#0070f3"
                }}
              >
                <AiOutlineCopy /> Copy
              </button>
            </div>
         
            <ContactUs/>
          </div>

          <MyLinks />
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Contact
