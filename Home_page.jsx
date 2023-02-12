import React from 'react'
import './upperRightnav.css'
import './Midnav.css'
import './rightLowerNav.css'
import './Lowerleftnav.css'
import { FaBeer } from 'react-icons/fa';



export default function Homepge() {
  return (
    <div>

      <div className="upperNev">
    <img id="img" src="https://placekitten.com/640/360 "/>
        <br/>
        <div className='personname'> <h2>Diane Copper</h2><br/>
         <br/>diane.copper@example.com</div>
        <div className='persondata'>15 &ensp;       | &ensp;    
           02<br/>Past &ensp;     
          Upcoming
        
        </div>
          
        
        <spam > Send Message </spam>
      </div>
      
      <div className="leftSideNev">
       <li></li><br/>
         <li>NEW</li> <br/>
         <li>PATIENT</li><br/>
         <li>FOLDER</li><br/>
         <li>UPLOAD</li><br/>
         <li>REPORT</li><br/>
         <li>SETTING</li><br/>
         <li>LOGOUT</li>
        
        
      </div>
       <div className="upprRightSide">
        <form className="upperdata">
          <spam id="ur1">Gender<br />Femail</spam>
          <spam id="ur2">Birthday <br />Feb 24 1997</spam>
          <spam id="ur3">Phone Nu<br />-(230)555-0108</spam>
          <spam id="ur4">Registered date <br />Feb 24 1997</spam>
          <spam id="ur5">Street Adrees <br />Femail</spam>
          <spam id="ur6">City <br />Cilepas</spam>
          <spam id="ur7">Zip-code <br />455859</spam>
          <spam id="ur8"> Member status<br /> Active ember</spam>
        </form>

      </div>
       <div className="leftLowernev">
        <h3>File/Document</h3>
        <form className="pdfnev">
          <spam id="sp1">Check Up result.pdf</spam>
          <spam id="sp2">Check Up result.pdf</spam>
          <spam id="sp3">Check Up result.pdf</spam>
          <spam id="sp4">Check Up result.pdf</spam>
        </form>
      </div>
      <div className="midNave">
        <spam id="main">
          <spam id="Mr1"><li>Upcomimg Appoiment</li></spam>
          <spam id="Mr2">Post Appoiments</spam>
          <spam id="Mr3">Medical Record</spam>
        </spam>
      </div>

      <div className="rightNev">
        <div className="Rightlowermain1">
          <spam id="Lr1">Root Canal Treatment</spam>
          <spam id="Lr2">Show Previous Treatments</spam>
        </div>
        <div className="Rightlowermain2">
          <spam className="Rightlowermainspam">
           <div id='main1'> 
             <spam id="LRr1">26 NOV '19' <br/> 9.00-10.00</spam>
            <spam id="LRr2">Treatments<br />Open Acces</spam>
            <spam id="LRr3">Dentist<br />Drg. Adam .H</spam>
            <spam id="LRr4">Nurse<br />Jassicamilia</spam>
            <spam id="LRr5">Birthday<br />9.00-10.00</spam>
             </div>
            <spam id='main2'>
            <spam id="LRr6">12 NOV '19<br />9.00-10.00</spam>
            <spam id="LRr7">Treatments<br />Root canal</spam>
            <spam id="LRr8">Dentist<br />Drg. Adam .H</spam>
            <spam id="LRr9">Birthday<br />Jassicamilia</spam>
            <spam id="LRr10">Phon Number<br />9.00-10.00</spam>
            </spam>
          </spam>
        </div>
      </div>
    </div>
  )

}
