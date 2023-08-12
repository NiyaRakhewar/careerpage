import React, { useState } from "react";
import "./careerPage.css";
import backgroundImg from "../../Images/background-img.jpeg";
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { data } from "../../data/data";

export const CareerPage = () => {
  const [jobInput, setJobInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);
  const clickHandler = () => {
    const filteringData = data.filter(
      ({ title, location }) =>
        title.toLowerCase().includes(jobInput.toLowerCase()) &&
        location.toLowerCase().includes(locationInput.toLowerCase())
    );
    setFilteredData(filteringData);
    setJobInput("");
    setLocationInput("");
  };

  return (
    <div className="careerpage-outer-container">
      <div className="careerpage-inner-container">
        <div className="career-outer-content-container">
          <div className="career-content-container">
            <h1 className="career-title">Career</h1>

            <div className="career-container">
              <h1 className="about-container"> About Peppermint</h1>
              <p className="career-subtitle">
                Peppermint is an award-winning robotics company, supported by
                SINE IIT-Bombay and Qualcomm. Peppermint develops and deploys
                Industrial and Enterprise robots and platforms for mobility-led
                services. The Engineering team has 50+ years of experience in
                building deep-tech and robotics products. Robots built on the
                Peppermint Platform are deployed across 13 cities in 4
                countries!
              </p>
            </div>
            <div className="img-container">
              <img src={backgroundImg} alt="" className="bgimage" />
            </div>
          </div>
        </div>

        <div className="career-search-outer-container">
          <div className="career-search-inner-container">
            <input
              type="text"
              value={jobInput}
              onChange={(e) => setJobInput(e.target.value)}
              placeholder=" Search Job"
              className="search-keyword-container"
            />
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder=" Search Location"
              className="search-location-container"
            />
            <div className="search-icon-container">
              <BiSearchAlt className="search-icon" onClick={clickHandler} />
            </div>
          </div>
        </div>
        <h3 className="result-container">Job Results {filteredData.length} </h3>
        <div className="job-list-container">
          {filteredData?.map((job) => {
            const {
              title,
              location,
              reqId,
              category,
              experience,
              salary,
              skills,
            } = job;
            return (
              <div className="job-card-container">
                <div className="job-title-location-container">
                  <p className="job-title-container">
                    <b>{title}</b>
                  </p>

                  <p className="job-location-container">
                    <IoLocationSharp className="location-icn" />
                    {location}
                  </p>
                </div>
                <hr />
                <div className="details-container">
                  <p className="req-id-container">Req ID: {reqId}</p>
                  <p className="category">{category}</p>
                  <li className="experience-container">
                    <b className="exp-title">Exp:</b> {experience}
                  </li>
                  <li className="salary-container">{salary}</li>
                  <li className="skills-container">
                    <b className="skills-title">Skills:</b>{" "}
                    <small>{skills.join(", ")}</small>
                  </li>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
