import './Team2';
import React from 'react';
import Group9 from "../assets/Group 9.png";

const Team2 = () => {
  return (
    <div className="container itemTeams">
      <h3 className="text-center">Meet Our Team</h3>
      <p className="text-center">
        "Meet the BuildLink team! Our skilled professionals bring expertise and dedication to every project. Together, we ensure your vision is realized with quality and care!"
      </p>

      <div className="row container flexitems">
        {/* Team Member 1 */}
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Tafadzwa H" className="team-img" />
        </div>

       
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Daniel X" className="team-img" />
        </div>

      
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Tracy X" className="team-img" />
        </div>

       
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Bernadette T" className="team-img" />
        </div>

        {/* Team Member 5 */}
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Kimberly" className="team-img" />
        </div>

        {/* Team Member 6 */}
        <div className="col-md-4 pipoL">
          <img src={Group9} alt="Ellarton H" className="team-img" />
        </div>

        {/* CTA Button */}
        <div className="orangebutton">
          <button className="btn intouch">get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Team2;
