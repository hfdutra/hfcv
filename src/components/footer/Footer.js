import './Footer.scss';
import Logo from '../header/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <footer>
            <div className="container">
                <Logo />
                <div className='social-links'>
                    <ul>
                        <li>
                            <a href="https://github.com/hfdutra" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/hfdutra/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/hfdutra" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/henrique_ferreira/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/henriquefdutra" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://discordhub.com/profile/1098603266771800194" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'discord']} />
                            </a>
                        </li>
                    </ul>


                </div>
                <p>© {new Date().getFullYear()} All rights reserved | Made with ❤️ by Henrique Ferreira</p>
            </div>
        </footer>
    )
}

export default Footer