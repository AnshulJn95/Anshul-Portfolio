import React, { useState, useEffect } from "react";
import "./contactus.css";
import Swal from 'sweetalert2'
import axios from 'axios';

// Contact us page
const ContactUs = () => {
  // all react useState hooks for state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // review the validation and upload the message
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Validation checks
    if (name.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Name can't be empty",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    
    if (email.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Email can't be empty",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    
    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: "Please enter a valid email address",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    
    if (message.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Message can't be empty",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (message.trim().length < 10) {
      Swal.fire({
        icon: 'warning',
        title: 'Message too short',
        text: "Please write a more detailed message (at least 10 characters)",
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    // Start submission process
    setIsSubmitting(true);
    
    try {
      const subject = "Thanks for contacting Anshul Jain!";
      const reply = `Hi ${name},\n\nThank you for reaching out! I appreciate your message and will get back to you as soon as possible. I'm always excited to discuss new opportunities, projects, and collaborations.\n\nBest regards,\nAnshul Jain`;
      
      const fd = new FormData();
      fd.append('to', email.trim());
      fd.append('subject', subject);
      fd.append('message', message.trim());
      fd.append('reply', reply);
      fd.append('name', name.trim());
      
      const response = await axios.post(`/api/send`, fd);
      console.log('Email sent successfully:', response);
      
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully!',
        text: 'Thank you for your message. I will get back to you soon!',
        showConfirmButton: false,
        timer: 2500
      });
      
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Send Message',
        text: 'Something went wrong. Please try again or contact me directly at anshulthegreat958@gmail.com',
        showConfirmButton: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contactus">
      <div 
        style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 style={{marginBottom: '10px', color: '#333'}}>Get In Touch</h3>
        <p style={{color: '#666', fontSize: '0.9rem'}}>
          Have a project in mind? Let's discuss how we can work together!
        </p>
      </div>
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'text'
            }}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Your Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'text'
            }}
          />
        </div>

        <div className="input-group">
          <textarea
            placeholder="Your Message * (minimum 10 characters)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            rows="5"
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'text',
              resize: 'vertical',
              minHeight: '100px'
            }}
          />
        </div>

        <button
          className="buttonStyle"
          type="submit"
          disabled={isSubmitting}
          style={{
            opacity: isSubmitting ? 0.6 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            background: isSubmitting ? '#ccc' : 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            transform: isSubmitting ? 'none' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      <div 
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '0.8rem',
          color: '#888'
        }}
      >
        <p>* Required fields</p>
        <p>I typically respond within 24-48 hours</p>
      </div>
    </div>
  );
};

export default ContactUs;
