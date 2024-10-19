import React from "react";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <h5>Contact Me</h5>
        <div className="contact-cotent">
          <div className="" style={{ flex: 1 }}>
            <ContactInfoCard
              iconUrl="/email.png"
              text="areesha21314@gmail.com"
            />
            <ContactInfoCard
              iconUrl="/github.jpg"
              text="https://github.com/Areesha-sites"
            />
          </div>
          <div className="" style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
