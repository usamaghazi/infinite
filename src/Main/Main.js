import React, { Component } from 'react'
import Sidebarr from '../Pages/Sidebar/Sidebar';
import Header from '../Pages/Header/Header';
import Body from '../Pages/Body/Body';
class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                {/*Sibar Start */}
                <Sidebarr/>
                {/*Sibar End */}
                <div className="col-md-9">
                    <Header/>
                    <div className="row mt-5 mb-3 pl-3">
                        <h3 className="text-muted">Student Dashboard</h3>
                    </div>
                    <Body/>
                </div>
                </div>
            </div>
        );
    }
}

export default Main;