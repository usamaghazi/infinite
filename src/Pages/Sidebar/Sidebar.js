import React, {Component} from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom'
class Sidebar extends Component {
    state={
        color:1
    }
    render(){
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
            activeStyle={{borderBottom:'3px solid white'}}
            to="/"
            style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
            <div className="row">
            <div className="col-md-9">  
            <ul className="Pixels Dashboard pl-4 mt-5 " onClick={()=>{this.setState({color:1})}}>
            {this.state.color===1?<li className="Pol">Dashboard</li>:<li className="Cooler">Dashboard</li>} 
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
            <ul className="Pixels Profile pl-4 pt-2" onClick={()=>{this.setState({color:2})}}>
            {this.state.color===2?<li className="Pol">Profile</li>:<li className="Cooler">Profile</li>}
            </ul>
            </NavLink> 
            {/*Chat... */}
            <NavLink
            to="/chat"
            activeStyle={{color:'green'}}
            style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
            <ul className="Pixels Chat pl-4 pt-2" onClick={()=>{this.setState({color:3})}}>
            {this.state.color===3?<li className="Pol">Chat</li>:<li className="Cooler">Chat</li>}
            </ul>
            </NavLink> 
            {/*Calender... */}
            <NavLink
            to="/chat"
            activeStyle={{color:'green'}}
            style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
            <ul className="Pixels Calendar pl-4 pt-2" onClick={()=>{this.setState({color:4})}}>
            {this.state.color===4?<li className="Pol">Calendar</li>:<li className="Cooler">Calendar</li>}
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
            <ul className="Pixels Notice pl-4 pt-2 " onClick={()=>{this.setState({color:5})}}>
            {this.state.color===5?<li className="Pol">Notice Board</li>:<li className="Cooler">Notice Board</li>} 
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
            <ul className="Pixels Assessments pl-4 pt-2" onClick={()=>{this.setState({color:6})}}>
            {this.state.color===6?<li className="Pol">Assessments</li>:<li className="Cooler">Assessments</li>}
            </ul>
            </NavLink>
             {/*Result... */}
             <NavLink
             to="/result"
             activeStyle={{color:'green'}}
             style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
             <ul className="Pixels Result pl-4 pt-2" onClick={()=>{this.setState({color:7})}}>
             {this.state.color===7?<li className="Pol">Result</li>:<li className="Cooler">Result</li>}
             </ul>
             </NavLink>
             {/*Course... */}
             <NavLink
             to="/course"
             activeStyle={{color:'green'}}
             style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
             <ul className="Pixels Course pl-4 pt-2" onClick={()=>{this.setState({color:8})}}>
             {this.state.color===8?<li className="Pol">Course</li>:<li className="Cooler">Course</li>}
             </ul>
             </NavLink>
             {/*Faqs... */}
             <NavLink
             to="/faqs"
             activeStyle={{color:'green'}}
             style={{":hover":{color:'green'},cursor:'pointer',textDecorationLine:'none'}}>
             <ul className="Pixels Faq pl-4 pt-2" onClick={()=>{this.setState({color:9})}}>
             {this.state.color===9?<li className="Pol">Faqs</li>:<li className="Cooler">Faqs</li>}
             </ul>
             </NavLink>
        </div>
        )
    }
}

export default Sidebar