import React from 'react';
import './index.css';
import Wave from '../../media/waveVideo.mp4'

export default function Footer(){
    return(
       <div> 
           <footer className= "footer">
           <a className="instagram" href="http://instagram.com/rebornbr">Follow us on Instagram</a>
            <video autoPlay loop style={{
                width: "50px",
            }}>
            <source src={Wave}/>
          </video>
      
            </footer>
       </div>
       
    );
};