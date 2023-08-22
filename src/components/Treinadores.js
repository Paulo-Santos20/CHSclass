import paulo from "../assets/img/paulo.jpg";
import douglas from "../assets/img/douglas.jpg";
import hilbert from "../assets/img/hilbert.jpg";
import dalemberg from "../assets/img/dalemberg.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
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
                        <h2>Treinadores</h2>
                        <p>Equipe de treinamento CHS.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={paulo} alt="Image" />
                                <h5>Paulo dos Santos</h5>
                            </div>
                            <div className="item">
                                <img src={douglas} alt="Image" />
                                <h5>Douglas Lima</h5>
                            </div>
                            <div className="item">
                                <img src={hilbert} alt="Image" />
                                <h5>Hilbert</h5>
                            </div>
                            <div className="item">
                                <img src={dalemberg} alt="Image" />
                                <h5>Dalemberg</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
