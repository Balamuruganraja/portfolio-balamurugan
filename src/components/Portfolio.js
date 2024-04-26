import React from 'react'
import './Portfolio.css'
import * as SiIcons from "react-icons/si";
import { FaHtml5,FaReact  } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import keeperApp from '../images/keeperApp.PNG';
import totoapp from '../images/todo-app.PNG';
import jobseeker from '../images/job-seeker.PNG';
import movieApp from '../images/movieApp.PNG';

import 'bootstrap/dist/css/bootstrap.min.css';



function Portfolio() {
    return (
        <div id='portfolio'>
            <h1 className='logo-text'>Portfolio</h1>
            
            <div className='allProjects'>
            <div class="card" data-aos="zoom-in-up">
                    <img src={jobseeker} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Job Seeker</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Job Seeker</div>
                        <div className='img-description'>
                            <p>Find your ideal job effortlessly with company details, job descriptions, and salary insights all in one convenient platform.
                            </p>
                            
                            <div className='tech_used'>
                                <FaHtml5  className='html5'/> &nbsp;
                                <SiIcons.SiCss3 className='css3'/> &nbsp;
                                <SiIcons.SiJavascript className='javascript'/> &nbsp;
                                <FaReact className='react' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Balamuruganraja/job_seeker'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://job-seeker-app.vercel.app/
                                    '>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card "  data-aos="zoom-in-up">
                    <img src={keeperApp} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Keeper App</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Keeper App</div>
                        <div className='img-description'>
                            <p>The Keeper app simplifies managing titles and descriptions by allowing users to effortlessly add and remove information. With intuitive features, users can quickly input or delete titles and descriptions, ensuring easy organization and streamlined data management. </p>
                            <div className='tech_used'>
                                <FaHtml5  className='html5'/> &nbsp;
                                <SiIcons.SiCss3 className='css3'/> &nbsp;
                                <SiIcons.SiJavascript className='javascript'/> &nbsp;
                                <FaReact className='react' /> &nbsp;
                                <p className='codeLinks text-center p-3'>
                                    <a className='bth btn-sm btn-success m3' target='_blank' rel="noreferrer" href='https://github.com/Balamuruganraja/Keeper-App'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://keeper-app-swart-nine.vercel.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className='tab'></div>  
                <div class="card" data-aos="zoom-in-up">
                    <img src={movieApp} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Movie App</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Movie App</div>
                        <div className='img-description'>
                            <p>Our movie app simplifies managing movie details such as titles, stock availability, genres, and ratings with easy-to-use add, edit, and remove features. Users can seamlessly update movie titles, track stock availability, assign genres, and rate movies, enhancing the organization and enjoyment of their collection.</p>
                            
                            <div className='tech_used'>
                            <FaHtml5  className='html5'/> &nbsp;
                                <SiIcons.SiCss3 className='css3'/> &nbsp;
                                <SiIcons.SiJavascript className='javascript'/> &nbsp;
                                <FaReact   className='react' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                   <a className='bth btn-sm btn-success ml-3'  target='_blank' rel="noreferrer" href='https://github.com/Balamuruganraja/Movie-App'>Frontend <i class="fab fa-github"></i></a>                                  
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://movie-app-one-eosin.vercel.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>                              
                <div class="card" data-aos="zoom-in-up">
                    <img src={totoapp} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Student Records</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Student Data</div>
                        <div className='img-description'>
                            <p>Our MERN-based Student Data Management App facilitates easy addition, editing, and deletion of student records, providing a user-friendly interface and efficient data management functionalities for seamless administration and organization.</p>
                            
                            
                            <div className='tech_used'>
                                <SiIcons.SiJavascript className='javascript'/> &nbsp;
                                <FaReact   className='react' /> &nbsp;
                                <IoLogoNodejs  className='nodejs'/> &nbsp;
                                <SiIcons.SiMongodb className='mongodb'/> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                   <a className='bth btn-sm btn-success ml-3'  target='_blank' rel="noreferrer" href='https://github.com/Balamuruganraja/todo'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Balamuruganraja/todo-backend'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://todo-rust-five.vercel.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>


                </div>

            </div>
        
    )
}

export default Portfolio
