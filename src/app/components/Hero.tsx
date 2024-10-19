import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h2>Building Digital Experience That Inspire</h2>
          <p>
            As a passionate frontend developer, I excel at turning creative
            ideas into visually appealing and functional web applications. With
            a strong focus on design and the latest web technologies, I deliver
            seamless, responsive experiences across all devices. Committed to
            high-quality code, I thrive in collaborative environments, always
            aiming to exceed user expectations and push the boundaries of
            digital innovation.
          </p>
        </div>
        <div className="hero-image">
          <div>
            <div className="tech-icon">
              <Image
                src="/react.jpg"
                alt="react-logo"
                height={120}
                width={120}
              />
            </div>
            <Image
              src="/main-image.jpg"
              alt="profile-image"
              height={400}
              width={400}
              className="profile-image"
            />
          </div>
          <div>
            <div className="tech-icon">
              <Image src="/html.jpg" alt="html-logo" height={120} width={120} />
            </div>
            <div className="tech-icon">
              <Image src="/css.jpg" alt="css-logo" height={120} width={120} />
            </div>
            <div className="tech-icon">
              <Image
                src="/javascript.jpg"
                alt="javascript-logo"
                height={120}
                width={120}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
