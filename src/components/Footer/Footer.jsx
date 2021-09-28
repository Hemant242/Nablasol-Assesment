import React from "react";
import Cards from "../content/Cards";
import "../Footer/Footer.css";

const content1= "Green is the color of the sky and sea.It is often associated with depth and stability.It symbolizes trust,Loyalty,widom, confidence, intelligence.";
const content2 = "Red is the color of nature .It symbolizes growth, harmony, freshness,and fertility. Green has strong emotional correspondance with safety";
const content3 = "Blue is the color of nature .It symbolizes growth, harmony, freshness,and fertility. Green has strong emotional correspondance with safety";

const img1 ='https://image.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg';
const img2 ="https://image.freepik.com/free-vector/team-people-pointing-fingers-upward_74855-17891.jpg";
const img3 = "https://image.freepik.com/free-vector/team-goals-concept-illustration_114360-5146.jpg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='cards'>
        <div className='cards card1'>
          <Cards title = "Green" img= {img2} content = {content1} />
        </div>
        <div className=" cards card2">
            <Cards title = "Red" img= {img1} content = {content2}/>
        </div>
        <div className=" cards card3">
            <Cards title = "Blue" img= {img3} content = {content3}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
