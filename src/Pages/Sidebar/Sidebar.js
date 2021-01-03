import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom'
export const Sidebar = (props) => {
    return(
        
            <div className="col-md-3 Back pt-4">
                <h1 style={{color:'white'}}>INDEX.</h1> 
                <div className="row mt-5">
                    <div className="col-md-6 pl-4">
                        <img
                        width="80px"
                        height="80px"
                        style={{border:'4px solid white',borderRadius:'50%'}} 
                        src="images/profile.jpg" alt="profile-pic"/>
                    </div>
                    <div className="col-md-6 text-center pt-4">
                    <button style={{color:'whitesmoke'}}
                    className="btn btn-outline-none btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    John Doe
                  </button>
                    </div>
                </div>
                <NavLink
                exact
                activeStyle={{color:'green'}}
                to="/"
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <div className="row">
                <div className="col-md-9">  
                <ul className="Pixels Dashboard pl-4 mt-5 ">
                <li  className="Cooler">Dashboard</li> 
                </ul>
                </div>
                <div className="col-md-3 text-right mt-5">
                <div className="Count text-center">
                    <p style={{color:'white',marginTop:'0px',fontSize:'13px'}}>3</p>
                </div>
                </div>
                </div> 
                </NavLink> 
                <NavLink
                to="/profile"
                activeStyle={{color:'green'}}
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <ul className="Pixels Profile pl-4 pt-2">
                    <li className="Cooler">
                    Profile
                    </li>
                </ul>
                </NavLink> 
                {/*Chat... */}
                <NavLink
                to="/chat"
                activeStyle={{color:'green'}}
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <ul className="Pixels Chat pl-4 pt-2">
                    <li className="Cooler">
                    Chat
                    </li>
                </ul>
                </NavLink> 
                {/*Calender... */}
                <NavLink
                to="/chat"
                activeStyle={{color:'green'}}
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <ul className="Pixels Calendar pl-4 pt-2">
                    <li className="Cooler">
                    Calender
                    </li>
                </ul>
                </NavLink>
                {/*Notice Board */}
                <NavLink
                exact
                activeStyle={{color:'green'}}
                to="/"
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <div className="row">
                <div className="col-md-9">  
                <ul className="Pixels Notice pl-4 pt-2 ">
                <li  className="Cooler">Notice Board</li> 
                </ul>
                </div>
                <div className="col-md-3 text-right mt-2">
                <div className="Countt text-center">
                    <p style={{color:'white',marginTop:'0px',fontSize:'13px'}}>15</p>
                </div>
                </div>
                </div> 
                </NavLink> 
                {/*Assessmant... */}
                <NavLink
                to="/chat"
                activeStyle={{color:'green'}}
                style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                <ul className="Pixels Assessments pl-4 pt-2">
                    <li className="Cooler">
                    Assessments
                    </li>
                </ul>
                </NavLink>
                 {/*Result... */}
                 <NavLink
                 to="/result"
                 activeStyle={{color:'green'}}
                 style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                 <ul className="Pixels Result pl-4 pt-2">
                     <li className="Cooler">
                     Result
                     </li>
                 </ul>
                 </NavLink>
                 {/*Course... */}
                 <NavLink
                 to="/course"
                 activeStyle={{color:'green'}}
                 style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                 <ul className="Pixels Course pl-4 pt-2">
                     <li className="Cooler">
                     Course
                     </li>
                 </ul>
                 </NavLink>
                 {/*Faqs... */}
                 <NavLink
                 to="/faqs"
                 activeStyle={{color:'green'}}
                 style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
                 <ul className="Pixels Faq pl-4 pt-2">
                     <li className="Cooler">
                     Faqs
                     </li>
                 </ul>
                 </NavLink>
            </div>
        
    )
}

export default Sidebar