import React from "react";
import { Link } from "react-scroll";
import featureimage from "../assets/bg1.jpg";
import featureimage1 from "../assets/Frame 19.png";
import member1 from "../assets/Saurav.png";
import member2 from "../assets/Rajesh.png";
import member3 from "../assets/amol.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeInStyle = {
    opacity: fadeIn ? 1 : 0,
    transition: "opacity 3s linear",
  };

  return (
    <div id="about" style={fadeInStyle}>
      {/* 
             <div className='features-model'>
                <img src={featureimage} alt='feature-image' />
            </div>
            */}

      <div className="content1">
        <center>
          <h1 className="about">About Us - We Freelancer's</h1>
        </center>
        <center>
          <Link to="home" className="Box">
            Home
            <span
              className="noBox"
              style={{ color: "red", fontWeight: "bold" }}
            >
              {" "}
              &gt; About Us
            </span>
          </Link>
        </center>
      </div>

      <div className="content2">
        <div className="content201">
          <img className="featureImage" src={featureimage} alt="featureImage" />
          <img
            className="featureImage1"
            src={featureimage1}
            alt="featureImage1"
          />
        </div>

        <div className="content202">
          <p className="heading">About Us</p>
          <h1>What Is Our Goal?</h1>

          <p style={{ color: "black" }}>
            At our organization, our goal is to provide comprehensive and
            innovative <br />
            solutions for all our clients' web, app, and software development
            needs. <br />
            We believe in creating user-friendly and efficient products that
            cater to <br />
            our clients' specific business challenges and objectives. Our team
            of
            <br /> skilled developers and designers work tirelessly to deliver
            products that
            <br /> exceed client expectations, while maintaining the highest
            standards of
            <br /> quality and customer service. We strive to be a trusted
            partner for our
            <br /> clients, helping them achieve their goals and maximize their
            potential
            <br /> in the digital world. Our mission is to continuously improve
            and evolve
            <br /> our services to meet the ever-changing needs of the industry
            and ensure
            <br />
            our clients' continued success.
          </p>
          <div className="EmptySpace">
            <p style={{ color: "grey" }}>
              Don't stress yourself out trying to figure out how to create a
              website, <br />
              piece of software, or mobile application for your company. We are
              aware
              <br />
              that you have other things on your mind. We are here to alleviate
              your
              <br />
              troubles by creating any kind of website, piece of software, or
              mobile
              <br />
              application for your company in with your preferences. accordance
              <br />
              We can build any kind of website, piece of software, or mobile app
              you need.
            </p>
          </div>
        </div>
      </div>

      <div className="content301" style={fadeInStyle}>
        <center>
          <h1 className="about1">
            Now let's meet the backbones of We Freelancer's
          </h1>
        </center>
        <center>
          <h2 style={{ color: "red" }}>CODERS & DEVELOPERS</h2>
        </center>
      </div>

      <div className="body" style={fadeInStyle}>
        <div className="slide-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="slide-content">
              <div className="card-wrapper">
                <SwiperSlide className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={member1}
                        alt="Saurav Gupta"
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="mname">Saurav Gupta</h2>
                    <p className="description">
                      Saurav Gupta is a skilled software developer at
                      <b>WeFreelancer's</b>, with a proven track record of
                      creating efficient software solutions for clients. His
                      expertise in various programming languages makes him a
                      valuable asset to the company. Saurav is committed to
                      helping businesses succeed in digital landscape through
                      innovative programming solutions.
                    </p>

                    <button className="button">View More</button>
                  </div>
                </SwiperSlide>
              </div>

              <div className="card-wrapper">
                <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={member3}
                        alt="Amol Gautam"
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="mname">Amol Gautam</h2>
                    <p className="description">
                      Amol Gautam is a highly skilled web developer who
                      currently works for <b>WeFreelancer's</b>, an organization
                      that specializes in providing top-notch freelancing
                      services to clients worldwide. With years of experience
                      and expertise in various web technologies, Amol is a
                      valuable asset to the company and a trusted partner to his
                      clients.
                    </p>

                    <button className="button">View More</button>
                  </div>
                </SwiperSlide>
              </div>

              <div className="card-wrapper">
                <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={member2}
                        alt="Rajesh Gowda"
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="mname">Rajesh Gowda</h2>
                    <p className="description">
                      Rajesh Gowda is a talented app developer at
                      <b>WeFreelancer's</b>, with a proven track record of
                      creating user-friendly and innovative solutions. He is a
                      valuable asset to the company, leveraging his expertise to
                      help businesses succeed in today's competitive landscape,
                      while delivering exceptional customer service.
                    </p>

                    <button className="button">View More</button>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default About;
