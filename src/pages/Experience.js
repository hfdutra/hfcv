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
                                    <li>Develop and manage websites using WordPress, Prestashop, and Shopify</li>
                                    <li>Develop custom WordPress themes and plugins to cater to unique client needs</li>
                                    <li>Built and delivered technical solutions according to stakeholder business requirements</li>
                                    <li>Customize layouts for WordPress, Prestashop, and Shopify to enhance website usability and user experience</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
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
                                    <li>Develop and manage websites using WordPress and Shopify</li>
                                    <li>Produce newsletters and design layouts for mobile apps</li>
                                    <li>Develop custom WordPress themes and plugins to cater to unique client needs</li>
                                    <li>Customize layouts for WordPress, Prestashop, and Shopify to enhance website usability and user experience</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
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
                                    <li>Develop and manage websites using WordPress, Prestashop, and Shopify</li>
                                    <li>Built and delivered technical solutions according to stakeholder business requirements</li>
                                    <li>Produce newsletters and design layouts for mobile apps</li>
                                    <li>Manage a dedicated server to ensure optimal performance and minimal downtime</li>
                                    <li>Develop custom WordPress themes and plugins to cater to unique client needs</li>
                                    <li>Create online menus, video lesson platforms, wine lists, and other digital assets using a WordPress structure</li>
                                    <li>Customize layouts for WordPress, Prestashop, and Shopify to enhance website usability and user experience</li>
                                    <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
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
                                    <li>Design, develop and edit advertising pieces, including photos and videos</li>
                                    <li>Prepare posts for newspapers, magazines, billboards, ads, banners, and other media</li>
                                    <li>Develop and manage websites to ensure optimal functionality and user experience</li>
                                    <li>Design newsletter layouts to enhance readability and visual appeal</li>
                                    <li>Built and delivered technical solutions according to stakeholder business requirements</li>
                                    <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
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
                                    <li>Create, develop, and edit presentations in multiple languages for state leaders, executives, committees, and foreign delegations</li>
                                    <li>Develop strategic and visually appealing pieces and public relations campaigns related to the government's actions in the House of Representatives</li>
                                    <li>Manage websites using HTML and CSS to ensure optimal functionality and user experience</li>
                                    <li>Create and design newsletter diagrams and programs to enhance readability and visual appeal</li>
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

                                    <li>Instruct students on the fundamental principles of graphic design and web design</li>
                                    <li>Teach students to use Adobe Creative Suite software, including Illustrator, Photoshop, InDesign, Dreamweaver, Flash, and Corel Draw</li>
                                    <li>Develop and deliver engaging lesson plans and instructional materials to facilitate student learning and retention</li>
                                    <li>Provide personalized feedback and guidance to students to help them achieve their learning objectives</li>
                                    <li>Collaborate with faculty and staff to ensure program curriculum aligns with industry standards and trends</li>
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