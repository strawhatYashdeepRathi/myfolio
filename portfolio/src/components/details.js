import React from "react";
import "./details.css";
import Bfree from '../assets/borderfree.jpeg'
import tenX from '../assets/tenX.jpeg'
import HCL from '../assets/HCL.jpeg'

const Details = () => {
  const header1 = " Borderfree"
  const header2 = " HCL Tech Ltd."
  const header3 = " The 10X Academy"
  return (
    <div className="port-details">
      <div className="port-details-container">
        <div className="port-details-card">
          
          <h3>-- Junior Software Developer --</h3>
          <div className="brandname"><img src={Bfree}/><h4>{header1}</h4></div>
          <span className="bar"></span>
          <p>Improved User Experience via Social Login Integration</p>
          <p>
            Developed one-on-one call scheduling
          </p>
          <p>
            Executed a personalized theme functionality
          </p>
        </div>

        <div className="port-details-card">
          <h3>--Analyst--</h3>
          <div className="brandname"><img src={HCL}/><h4>{header2}</h4></div>
          <span className="bar"></span>
          <p>Serving as the first point of contact for IT Support.</p>
          <p>
            Analyze high priority tasks and report accuratelt.
          </p>
          <p>
            Collaborating with client/colleagues all around the world.
          </p>
        </div>

        <div className="port-details-card">
          <h3>--Full STack Developer Bootcamp--</h3>
          <div className="brandname"><img src={tenX}/><h4>{header3}</h4></div>
          <span className="bar"></span>
          <p>Polishing problem solving skills and DSA</p>
          <p>
            Learning how to build high performance, efficient softwares.
          </p>
          <p>
            Acing 200+ leetcode problems along with building multiple web apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
