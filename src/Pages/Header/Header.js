import React, { Component } from 'react'
import './Header.css'
class Header extends Component {
    
    render() {
        return (
            <>
           
                   <div className="row py-3 Shadow sticky-top" style={{backgroundColor:'white'}}>
                      <div className="col-md-9">
                      <button className="Button">    
                      <img src="images/menu.png" alt="menu"/>
                      </button>
                      </div> 
                      <div className="col-md-3">
                      <div className="row">
                          <div className="col-md-3">
                              <button className="Buttonn" type="button">
                              <img src="images/notify.png" alt="notify"/>
                              </button>
                          </div>
                          <div className="col-md-3">
                              <button className="Button" type="button">
                              <img src="images/message.png" alt="message"/>
                              </button>
                          </div>
                          <div className="col-md-3">
                              <button className="Button" type="button">
                              <img src="images/email.png" alt="email"/>
                              </button>
                          </div>
                          <div className="col-md-3">
                              <button className="Button" type="button">
                              <img src="images/calandar.png" alt="calendar"/>
                              </button>
                          </div>
                      </div>
                      </div>
                   </div>
           </>
        );
    }
}

export default Header;