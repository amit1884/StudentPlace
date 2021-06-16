import React from 'react'

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row mt-20">
                <div className="col-md-1 col-sm-12 colxs-12"></div>
                <div className="col-md-3 col-sm-12 colxs-12">
                    <h6 className="text-heading">MissionEd</h6>
                    <p style={{color:'gray'}} className="text-center-mb">Affiliated with Atal Incubation Center<br/>
                    Goa Institute of Management<br/>
                    India</p>
                    <br/>
                    <p className="text-center-mb"><b>Email :</b><span style={{color:'gray'}}>missionediit@gmail.com</span></p>
                </div>
                <div className="col-md-2 col-sm-12 colxs-12">
                <h6>Useful Links</h6>
                <ul>
                    <li><span>{'>'}</span>&nbsp;Home</li>
                    <li><span>{'>'}</span>&nbsp;About Us</li>
                    <li><span>{'>'}</span>&nbsp;Services</li>
                    <li><span>{'>'}</span>&nbsp;Careers</li>
                    <li><span>{'>'}</span>&nbsp;Terms of Services</li>
                    <li><span>{'>'}</span>&nbsp;Privacy Policy</li>
                </ul>
                </div>
                <div className="col-md-2 col-sm-12 colxs-12">
                <h6>Our Services</h6>
                <ul>
                    <li><span>{'>'}</span>&nbsp;MissionEd Store</li>
                    <li><span>{'>'}</span>&nbsp;MissionEd Classes</li>
                    <li><span>{'>'}</span>&nbsp;MissionEd Classes (School)</li>
                    <li><span>{'>'}</span>&nbsp;MissionEd Referral</li>
                    <li><span>{'>'}</span>&nbsp;MissionEd pro</li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-12 colxs-12">
                <h6>Our Social Networks</h6>
                <p style={{color:'gray'}}>Reach out to us anytime!</p>
                    <button className="social_btn">f</button>&nbsp;&nbsp;
                    <button className="social_btn">in</button>
                </div>
                <div className="col-md-1 col-sm-12 colxs-12">
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
