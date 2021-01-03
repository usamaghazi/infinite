import React, { Component } from 'react'
import './Body.css';
import { Bar , Doughnut} from 'react-chartjs-2';
class Body extends Component {
    state={
        charData:{
            labels:['Jun','Jul','Aug','Sep','Nov','Oct','Dec'],
            datasets:[
                {
                label:'Attendance',    
                data:[50,40,70,60,50,90,30,20],
                backgroundColor:'#39CEEF'
            }]
        },
        pieData:{
            labels:['Present 70.00%','Absent 20.00%','Leave 10.00%'],
            datasets:[
                {
                label:'Attendance',    
                data:[70,20,10],
                backgroundColor:['#49F508','#F53A08','#39CEEF',]
            }]
        },
        appointments: [
            { id: 0, start: 540, end: 600 },
            { id: 1, start: 660, end: 690 },
            { id: 2, start: 720, end: 750 },
            { id: 3, start: 780, end: 840 },
          ]
    
    }
    render() {
        return (
            <>
                    <div className="row">
                    <div className="col-md-4">
                    <div className="card Shadow" style={{borderRadius:'5px'}}>
                    <div className="card-body">
                      <div className="Icon mb-3 text-center align-content-center pt-1">
                        <img src="images/calandar.png" alt="cal"/>
                      </div>
                      <h4 className="card-subtitle mb-2 ">60%</h4>
                      <h4 className="card-subtitle">Attendence Percentage</h4> 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BECAFE" fill-opacity="1" d="M0,96L40,128C80,160,160,224,240,213.3C320,203,400,117,480,96C560,75,640,117,720,144C800,171,880,181,960,154.7C1040,128,1120,64,1200,37.3C1280,11,1360,21,1400,26.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                  </div>
                  </div>
                  {/*Second Card Course */}
                  <div className="col-md-4">
                    <div className="card Shadow" style={{borderRadius:'5px'}}>
                    <div className="card-body">
                      <div className="Icon mb-3 text-center align-content-center pt-1">
                        <img src="images/courses.png" alt="cal"/>
                      </div>
                      <h4 className="card-subtitle mb-2 ">60%</h4>
                      <h4 className="card-subtitle ">Numbers of Courses</h4> 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FEBEBE" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,106.7C384,85,480,107,576,144C672,181,768,235,864,218.7C960,203,1056,117,1152,85.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                  </div>
                  </div>
                  {/*Percentage */}
                  <div className="col-md-4">
                  <div className="card Shadow" style={{borderRadius:'5px'}}>
                  <div className="card-body">
                    <div className="Icon mb-3 text-center align-content-center pt-1">
                      <img src="images/percentage.png" alt="cal"/>
                    </div>
                    <h4 className="card-subtitle mb-2">80%</h4>
                    <h4 className="card-subtitle">Total Marks Percentage</h4> 
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DBFEBE" fill-opacity="1" d="M0,128L24,117.3C48,107,96,85,144,90.7C192,96,240,128,288,117.3C336,107,384,53,432,37.3C480,21,528,43,576,74.7C624,107,672,149,720,144C768,139,816,85,864,69.3C912,53,960,75,1008,74.7C1056,75,1104,53,1152,37.3C1200,21,1248,11,1296,26.7C1344,43,1392,85,1416,106.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                </div>
                </div>
                  </div>
                  {/*SECOND PART */}
                  <div className="row">
                  {/*2div Colum */}
                      <div className="col-md-4 mt-4">
                          <div className="row">
                              <div className="col-md-12">
                              <div className="card Shadow pb-2" style={{borderRadius:'5px'}}>
                              <div className="card-body">
                                <div className="Icon mb-3 text-center align-content-center pt-1">
                                  <img src="images/clock.png" alt="cal"/>
                                </div>
                                <h4 className="card-subtitle mb-2 text-muted mt-4">Next Class</h4>
                                <h4 className="card-subtitle mt-4"><span style={{backgroundColor:'#E8E8E8'}} className="px-2">1 : 45 : 00</span></h4> 
                              </div>
                              </div>
                              </div>
                              {/*Up Coming Events */}
                              <div className="col-md-12 mt-4">
                              <div className="card Shadow pb-2" style={{borderRadius:'5px'}}>
                              <div className="card-body">
                                <div className="Icon mb-3 text-center align-content-center pt-1">
                                  <img src="images/calandar.png" alt="cal"/>
                                </div>
                                <h4 className="card-subtitle mb-2  mt-4">Up Coming Events</h4>
                                <h6 className="card-subtitle text-muted mt-2"><span style={{fontSize:'1vw'}}>ksjsd sdknfksdnf skdfnskjfnksdj skdnfsknfksj skdnfsknfsk ksnfdksnf ksdjfksfd skdfnksfn </span></h6> 
                              </div>
                              </div>
                              </div>
                          </div>
                      </div>
                      {/*chart.... */}
                      <div className="col-md-8 mt-4">
                          <div className="card Shadow pb-1">
                              <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-10">
                                        <h3>Chart</h3>
                                    </div>
                                    <div className="col-md-1">
                                        <img src="images/mini.png" alt="mini"/>
                                    </div>
                                    <div className="col-md-1">
                                        <img src="images/cross.png" alt="cross"/>
                                    </div> 
                                  </div>
                                <Bar
                                data={this.state.charData}
                                options={{}}/>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/*Pie Char */}
                  <div className="row">
                      <div className="col-md-6 mt-4">
                      <div className="card Shadow">
                      <div className="card-body">
                          <div className="row">
                            <div className="col-md-10">
                                <h3>Attendance</h3>
                            </div>
                            <div className="col-md-1">
                                <img src="images/mini.png" alt="mini"/>
                            </div>
                            <div className="col-md-1">
                                <img src="images/cross.png" alt="cross"/>
                            </div> 
                          </div>
                        <Doughnut
                        data={this.state.pieData}
                        options={{}}/>
                      </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="card Shadow">
                        <div className="card-body">
                        <div className="row">
                        <div className="col-md-10">
                            <h3>Event Calendar</h3>
                        </div>
                        <div className="col-md-1">
                            <img src="images/mini.png" alt="mini"/>
                        </div>
                        <div className="col-md-1">
                            <img src="images/cross.png" alt="cross"/>
                        </div> 
                      </div>
                      <h1>For Scheduler Calendar</h1>
              
                    </div>
                    </div>
                </div>
                </div>
                {/*Long Cards */}
                <div className="row">
                    <div className="col-12 mt-4">
                    <div className="card Shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                      <div style={{display:'flex'}}>
                      <div>
                          <img
                          style={{borderRadius:'50%'}}
                          width="60px"
                          height="60px" 
                          src="images/profile.jpg" alt="profile"/>
                      </div>
                      <div className="ml-2">
                          <h4 style={{margin:'0%',marginTop:'10px'}}>
                          Usama
                          </h4>
                          <h6 className="text-muted">Admin</h6>
                      </div>
                      </div>
                      </h5>
                      <h4>Importance Notice: Schedule Maintance for Sms</h4>
                      <p className="card-text text-muted mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                    </div>
                </div>
                {/*Long Cards Two */}
                <div className="row">
                    <div className="col-12 mt-1">
                    <div className="card Shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                      <div style={{display:'flex'}}>
                      <div>
                          <img
                          style={{borderRadius:'50%'}}
                          width="60px"
                          height="60px" 
                          src="images/profile.jpg" alt="profile"/>
                      </div>
                      <div className="ml-2">
                          <h4 style={{margin:'0%',marginTop:'10px'}}>
                          Usama
                          </h4>
                          <h6 className="text-muted">Admin</h6>
                      </div>
                      </div>
                      </h5>
                      <h4>Importance Notice: Schedule Maintance for Sms</h4>
                      <p className="card-text text-muted mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                    </div>
                </div>
                {/*Long Cards Third*/}
                <div className="row">
                    <div className="col-12 mt-1">
                    <div className="card Shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                      <div style={{display:'flex'}}>
                      <div>
                          <img
                          style={{borderRadius:'50%'}}
                          width="60px"
                          height="60px" 
                          src="images/profile.jpg" alt="profile"/>
                      </div>
                      <div className="ml-2">
                          <h4 style={{margin:'0%',marginTop:'10px'}}>
                          Usama
                          </h4>
                          <h6 className="text-muted">Admin</h6>
                      </div>
                      </div>
                      </h5>
                      <h4>Importance Notice: Schedule Maintance for Sms</h4>
                      <p className="card-text text-muted mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        <section style={{display:'flex'}}>
                            <div>
                            <button style={{backgroundColor:'#C2C6C5 ',border:'#C2C6C5'}} type="button" className="btn btn-secondary btn-lg">Teacher Panel</button>
                            </div>
                            <div className="ml-4">
                            <button type="button" className="btn btn-secondary btn-lg">School Panel</button>
                            </div>
                        </section>
                    </div>
                </div>
                </>
        );
    }
}

export default Body;