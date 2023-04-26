import '../assets/scss/_Experience.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EducationTimer from "../components/timer/EducationTimer";
import WorkExperienceTimer from "../components/timer/WorkExperienceTimer";


function Experience() {
    return (
        <section id="Experience" className='bg-alt'>

            <div className="container">
                <div className="block-title">
                    <h4 className="accent">Experience</h4>
                    <h2>Where I’ve Worked</h2>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>
                            <p>Vizuh</p>
                        </Tab>
                        <Tab>
                            <p>Group Seventy One</p>
                        </Tab>
                        <Tab>
                            <p>ForDesign SC</p>
                        </Tab>
                        <Tab>
                            <p>GCD.pt</p>
                        </Tab>
                        <Tab>
                            <p>Rio de Janeiro Government</p>
                        </Tab>
                        <Tab>
                            <p>Seven CGI</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="panel-content">

                            <h3>Frontend Developer - Vizuh
                                <img src="./assets/images/portugal.svg" alt="Portugal" />
                            </h3>
                            <p className="range">May 2018 - Present
                                <span className='timer'>
                                    <EducationTimer graduationDate="2018-05-01" />
                                </span>
                            </p>


                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-content">



                            <h3>Web Developer - Group Seventy One
                                <img src="./assets/images/uk.svg" alt="UK" />
                            </h3>
                            <p className="range">May 2017 - March 2023
                                <span className='timer'>
                                    <WorkExperienceTimer startDate="2017-05-01" endDate="2023-03-31" />
                                </span>
                            </p>


                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="panel-content">

                            <h3>Web Developer - ForDesign SC
                                <img src="./assets/images/portugal.svg" alt="Portugal" />
                            </h3>
                            <p className="range">September 2017 - December 2022
                                <span className='timer'>
                                    <WorkExperienceTimer startDate="2017-09-01" endDate="2022-12-31" />
                                </span>
                            </p>

                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-content">

                            <h3>Graphic and Web Designer - GCD.pt
                                <img src="./assets/images/portugal.svg" alt="Portugal" />
                            </h3>
                            <p className="range">August 2016 - August 2017
                                <span className='timer'>
                                    <WorkExperienceTimer startDate="2016-08-01" endDate="2017-08-31" />
                                </span>
                            </p>

                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-content">

                            <h3>Graphic and Web Designer - Rio de Janeiro Government
                                <img src="./assets/images/brazil.svg" alt="Brazil" />
                            </h3>
                            <p className="range">May 2013 - August 2016
                                <span className='timer'>
                                    <WorkExperienceTimer startDate="2013-05-01" endDate="2016-08-30" />
                                </span>
                            </p>

                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-content">

                            <h3>Adobe Illustrator, Photoshop and InDesign Trainer - Seven CGI
                                <img src="./assets/images/brazil.svg" alt="Brazil" />
                            </h3>
                            <p className="range">January 2011 - May 2013
                                <span className='timer'>
                                    <WorkExperienceTimer startDate="2011-01-01" endDate="2013-05-31" />
                                </span>
                            </p>

                            <div>
                                <ul>
                                    <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </TabPanel>

                </Tabs>

            </div>
        </section>

    )
}

export default Experience