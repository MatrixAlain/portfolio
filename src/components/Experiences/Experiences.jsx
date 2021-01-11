import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experiences">
      <Container>
        <div className="experience-wrapper">
          <Title title="Experience" />
          {experiences.map((experience) => {
            const { company, title, duration, about, role, url, repo, img, id } = experience;

            return (
              <Row key={id}>
                <Col lg={8} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="experience-wrapper__text">
                      <h3 className="experience-wrapper__text-title">
                        {company || 'Experience Title'}
                      </h3>
                      <div>
                        <p>
                          <span className="experience-wrapper__text-subtitle">
                            {title || 'The Boss'}
                          </span>
                          <br></br>
                          <span>{duration || 'Then - Now'}</span>
                        </p>
                        <p className="mb-4"><span className="experience-wrapper__text-subtitle">Last Role:</span> {role || ''}</p>
                        <p className="mb-4"><span className="experience-wrapper__text-subtitle">The Company:  </span> {about || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        More Detail
                      </a>
                      {repo && ( 
                      <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-btn text-color-main"
                          href={url || '#!'}
                        >
                              Company Website
                            </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="experience-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Experience Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ExperienceImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
