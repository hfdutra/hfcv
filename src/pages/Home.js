import '../assets/scss/_Home.scss';
import { BsArrowDownCircle } from 'react-icons/bs';
import React, { useRef } from 'react'



function Home() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section id="Home">
                <div className="container">
                    <h4>Hi, my name is</h4>
                    <h1 className='hf'>Henrique Ferreira<span style={{ color: '#1f6feb' }}>.</span></h1>
                    <h1>I build things for the web<span style={{ color: '#1f6feb' }}>.</span></h1>
                    <p>I like to craft solid and scalable frontend products with great user experiences.
                        <br />Proven experience building successful projects for clients across several countries.</p>
                    <a className="cta-link" href="#Contact">Contact Me</a>
                    <div className="scroll-down-wrap ">
                        <a href='#About'>
                            <BsArrowDownCircle />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home