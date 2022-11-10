import React from 'react'
import './home.css';
import logo from './img/logo-1.png'
import logo1 from './img/logo-2-1.png'
import logo2 from './img/logo-2-2.png'
import logo3 from './img/logo-2-3.png'
import logo4 from './img/logo-2-4.png'
import logo5 from './img/logo-2-5.png'
import logo6 from './img/logo-2-6.png'
import logo7 from './img/logo-2-7.png'
import logo8 from './img/logo-2-8.png'
import logo11 from './img/logo-3-1.png'
import logo12 from './img/logo-3-2.png'
import logo13 from './img/logo-3-3.png'
import logo14 from './img/logo-3-4.png'
import logo15 from './img/logo-3-5.png'
import logo16 from './img/logo-3-6.png'
import logo17 from './img/logo-3-7.png'
import logo18 from './img/logo-3-8.png'
import logo19 from './img/logo-3-9.png'
const Home = () => {
    return (
        <div className='box'>
            <div className='first-page'>
                <div className='Heading-1'><span className='Heading-1-1'>DESIGN</span><span className='Heading-1-2'>AGENCY</span></div>
                <div className='nav-bar'>
                    <span>Specialize in</span>
                    <span>Case Study</span>
                    <span>Process</span>
                    <span>Industries</span>
                </div>
                <div className='first-button-1'>
                    <div className='first-button-1-text'>Schedule A Call</div>
                </div>
                <div className='first-button-2'>
                    <div className='first-button-2-text'>We are Hiring</div>
                </div>

                <img className='first-logo' src={logo} alt='photo1' />
                <div className='first-content-1'>INNOVATION DIGITAL TECHNOLOGY</div>
                <div className='first-content-2'>everything we do is the consumer, imagination and you.</div>

            </div>
            <div className='box2'>
                <div className='Heading-2'>MEASUREMENT TO OUR SUCCESS</div>
                <div className='Heading-2-small'>Our process-driven approach keeps us going</div>
                <img className='logo-2-1' src={logo1}></img>
                <img className='logo-2-2' src={logo2}></img>
                <img className='logo-2-3' src={logo3}></img>
                <img className='logo-2-4' src={logo4}></img>
                <img className='logo-2-5' src={logo5}></img>
                <img className='logo-2-6' src={logo6}></img>
                <img className='logo-2-7' src={logo7}></img>
                <img className='logo-2-8' src={logo8}></img>
                <div className='logo-2-text1'>TRANSPARENCY AND RELIABILITY</div>
                <div className='logo-2-text2'>REAL TIME PROJECT STATUS</div>
                <div className='logo-2-text3'>WELL STRUCTURED COMMUNICATION</div>
                <div className='logo-2-text4'>AGILE METHODOLOGY</div>
                <div className='logo-2-text5'>ONSITE COLLABORATION</div>
                <div className='logo-2-text6'>INNOVATION AT WORK</div>
                <div className='logo-2-text7'>CLIENT'S INVOLVEMENT IN EACH MILESTONE</div>
                <div className='logo-2-text8'>DEDICATED TEAM</div>
                
            </div>
            <div className='box3'>
                <div className='Heading-3'><div className='Heading-31'>WE ARE WORKING</div> 
                <div className='Heading-32'>WITH THESE INDUSTRIES</div></div>
            
            <img className='logo-3-1' src={logo11}></img>
            <img className='logo-3-2' src={logo12}></img>
            <img className='logo-3-3' src={logo13}></img>
            <img className='logo-3-4' src={logo14}></img>
            <img className='logo-3-5' src={logo15}></img>
            <img className='logo-3-6' src={logo16}></img>
            <img className='logo-3-7' src={logo17}></img>
            <img className='logo-3-8' src={logo18}></img>
            <img className='logo-3-9' src={logo19}></img>
            <div className='logo-3-text1'>MEDIA & ENTERTAINMENT</div>
            <div className='logo-3-text2'>HEALTH CARE & WELLNESS</div>
            <div className='logo-3-text3'>HOSPITALITY & REAL ESTATE</div>
            <div className='logo-3-text4'>RETAIL & E COMMERCE</div>
            <div className='logo-3-text5'>EDUCATION & LEARNING</div>
            <div className='logo-3-text6'>TRAVEL & TRANSPORT</div>
            <div className='logo-3-text7'>MOBILE & TELECOM</div>
            <div className='logo-3-text8'>IT & ITES</div>
            <div className='logo-3-text9'>AGRITECH</div>
            </div>
        </div>
    )
}

export default Home