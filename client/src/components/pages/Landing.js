import React from 'react';
import { IconContext } from "react-icons";
import { FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import {Link} from "react-router-dom";
const Landing = () => (

    <div style={{textAlign: 'center'}}>
        <h3>Selling you great stuff!</h3>
        with the help of the chatbot<br/><br/><br/>
        <ul id="nav-mobile" className="left hide-on-med-and-down" style={{border:"2px solid black",borderRadius:'30%',padding:'5px',margin:'5px'}}>
        <li><Link to={'/shop'}>
        <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"3em" ,textAlign: 'right'}}>
            <div>
                <FaPhone/><br/>

            </div>
        </IconContext.Provider></Link></li></ul>
        <ul id="nav-mobile" className="left hide-on-med-and-down" style={{border:"2px solid black",borderRadius:'30%',padding:'5px',margin:'5px'}}>
        <li><Link to={'/shop'}>
            <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"3em" ,textAlign: 'right'}}>
                <div>
                    <FaWhatsapp/><br/>

                </div>
            </IconContext.Provider></Link></li></ul>
        <ul id="nav-mobile" className="left hide-on-med-and-down" style={{border:"2px solid black",borderRadius:'30%',padding:'5px',margin:'5px'}}>
        <li><Link to={'/'}>
            <IconContext.Provider value={{ color: "black", className: "global-class-name", size:"3em" ,textAlign: 'right'}}>
                <div>
                    <FaRocketchat/><br/>

                </div>
            </IconContext.Provider></Link></li></ul>
    </div>
);

export default Landing;
