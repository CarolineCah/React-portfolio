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
              <h2>What I love about coding</h2>
              <p>
                I found a pattern in what led me to learn coding and who I am.
                <br />
                1. I love logical games, chess, sudoku, quizzes. I like creating
                worlds and stories, I have played RPGs a lot, video games and I
                like organizing events. <br />
                2. In early days I found myself drawn to complex problems such
                as world politics and international relations. <br /> 3. I make
                music. What I love about that is that after playing in a band
                since 6th grade was to control and compose a song. Focus on
                parts that I like in different parts of instruments <br />{" "}
                <br />
                My main focus is Javascript, CSS components and keeping up with
                useful frameworks such as React.
                <br></br> For backend I focus on C# and Serverless computing in
                AWS with Lambda functions, S3, DynamoDB, Cloudwatch, Step
                Functions and CRON jobs.
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
