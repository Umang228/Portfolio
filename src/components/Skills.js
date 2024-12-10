import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Combining expertise in full-stack development, database management, and front-end frameworks with <br></br>strong problem-solving and collaboration skills to deliver innovative solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Skill 1" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill 2" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill 3" />
                                <h5>Html/CSS/Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 4" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill 5" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill 6" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 7" />
                                <h5>Application Programming Interfaces (API)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 8" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 9" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill 10" />
                                <h5>Php</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill 11" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 12" />
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill 13" />
                                <h5>Jira</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill 14" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill 15" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 16" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill 17" />
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill 18" />
                                <h5>Backend</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background-image" />
    </section>
  )
}
