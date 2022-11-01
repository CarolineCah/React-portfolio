import react from "../assets/img/react.png";
import ts from "../assets/img/ts.png";
import js from "../assets/img/js.png";
import graphql from "../assets/img/graphql.png";
import aws from "../assets/img/aws.png";
import c from "../assets/img/c.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I build frontend in Typescript/Javascript, styling with CSS and
                popular styling frameworks such as Motion, styled.js and simple
                CSS<br></br> For backend I have experience in C# and serverless
                architectue in AWS with Lambda functions, S3 storage, Cloudwatch
                and CRON jobs.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={ts} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image" />
                  <h5>Servless architecture</h5>
                </div>
                <div className="item">
                  <img src={graphql} alt="Image" />
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C#</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
