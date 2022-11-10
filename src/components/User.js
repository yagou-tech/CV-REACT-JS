import React from 'react'
import './User.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';

function User() {
    return (
        <div className='user'>
            <div className='user_head defcon'>
                <img src='./images/avatar.jpg' alt='' className='user_avatar'></img>
                <h1 className='user_name'>Yagouba BA</h1>
                <p className='user_profession'>Developpeur Web <br /><br /> </p>
            </div>

            <div className='user_infos'>
                <p className='user_info'>
                    <PhoneIcon className='icon' />
                    <span className='defcon'><a href='tel:+0 123-456-789'> +0 123-456-789</a> <br />Mobile</span>

                </p>
                <p className='user_info'>
                    <MailOutlineIcon className='icon' />
                    <span className='defcon'><a href='mailto:yagou@bakeli.tech'>yagou@bakeli.tech</a><br />Personal</span>
                </p>
                <p className='user_info'>
                    <LocationOnIcon className='icon' />
                    <span className='defcon'>H-123, Block A <br />Dakar, Sénégal <br />Home</span>
                </p>
            </div>
            <div className="technical_skills">
                <AssignmentIcon className='icon' />
                <div className='defcon'>
                    <h3 className="title">Technical Skills</h3>
                    <ul>
                        <li>
                            <span>HTML5,CSS3,JQuery</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="95" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Angular 5</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Bootstrap</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="95" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>WordPress</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="75" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Codelgniter</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="60" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Photoshop,Illustrator, Xd</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="90" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>InVision</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="80" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="personal_skills">
                <AssignmentIcon className='icon' />
                <div>
                    <h3 className="title">Personal Skills</h3>
                    <ul>
                        <li>
                            <span>Creativity</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="90" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Leadership</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="90" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span>Communication</span>
                            <span>
                                <div>
                                    <input type="range" min="1" max="100" value="80" className="slider" id="myRange"></input>
                                </div>
                            </span>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default User