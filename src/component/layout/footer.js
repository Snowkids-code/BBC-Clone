import React from 'react'
import { useState } from 'react';
import footer from "./footer.module.css";

const footerLinks =[
    {link:"Home"},
    {link:"News"},
    {link:"Sport"},
    {link:"Reel"},
    {link:"Worklife"},
    {link:"Travel"},
    {link:"Future"},
    {link:"Culture"},
    {link:"TV"},
    {link:"Weather"},
    {link:"Sounds"}    
];

const otherLinks =[
  {link:"Terms of Use"},
  {link:"About the BBC"},
  {link:"Privacy Policy"},
  {link:"Cookies"},
  {link:"Accessibility Help"},
  {link:"Parental Guidance"},
  {link:"Contact the BBC"},
  {link:"BBC emails for you"},
  {link:"Advertise with us"},
  {link:"AdChoices/Do Not Sell My Info"},
]
export default function Footer() {
     const [active, setActive] = useState();

  return (
    <div className={footer.footer} >
      <div className={footer.mainHeading}>
        <h3>Explore the BBC</h3>
      </div>
      <div className={footer.footerLinks}>
          {footerLinks.map((link,i)=>{
           <p className={
            active === link.link ? footer.activeFooterLink : footer.footerLink 
           }
           style={
            active === link.link 
          ? {textDecorationColor:"grey"}
          :null
        }
           key={i}
           onMouseEnter={() => setActive(link.link)}
           onMouseLeave={() => setActive()}>{link.link}</p>
          })}

      </div>
      <hr></hr>
        <div>
          <p 
          className=''>

          </p>
        </div>
    </div>
  )
}

