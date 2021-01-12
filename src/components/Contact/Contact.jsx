import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="form-group social-links">
                <input id="contact_name" type="text" name="name" className="form-control form-control-lg w-50" placeholder="Your Name"/>
              </div>
              <div className="form-group social-links">
                <input id="contact_email" type="email" name="email" className="form-control form-control-lg w-50" placeholder="Your Email"/>
              </div>
              <div className="form-group social-links">
                <textarea id="contact_message" name="message" className="form-control form-control-lg w-50"  rows="5" placeholder="Your Message"/>
              </div>
              <button className="cta-btn cta-btn--resume" type="submit">
                {btn || "Let's Talk"}
              </button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
