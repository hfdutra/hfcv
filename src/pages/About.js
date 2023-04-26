import '../assets/scss/_About.scss';

function About() {
    return (

        <section id="About" className='bg-alt'>
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src="/assets/images/profile.jpg" alt="Henrique Ferreira" className="profile" />
                    </div>
                    <div className="text-side">
                        <h4 className="accent"> Who I am</h4>
                        <h2>About me</h2>
                        <p>Hi there! My name is Henrique Ferreira, and I'm a Brazilian Front-End developer and Graphic Designer currently based in Portugal. With a background in graphic design since 2010, I fell in love with coding in 2014 and have been passionate about crafting exceptional user experiences ever since. I have 6 years of experience in Front-End development, and I'm proficient in HTML, CSS, JavaScript, React, SASS, and various CMS's such as WordPress, Shopify, and Prestashop.</p>
                        <p>My primary focus is on building responsive websites that offer seamless user experiences. I'm skilled at crafting dynamic and engaging interfaces, writing clean and optimized code, and using cutting-edge development tools and techniques. I thrive on collaborating with cross-functional teams to produce outstanding web applications. So, if you're looking for a Front-End developer who can help you build successful products, look no further. I have a proven track record of working with clients from different countries, and I'd love to help you bring your project to life.</p>

                        <img src="/assets/images/sign.png" alt="Henrique Ferreira" className="signature" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About