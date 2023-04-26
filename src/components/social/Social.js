import './Social.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Social() {
    return (
        <>
            <div className="social-fixed m-hide">
                <div className="left">
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
                <div className="right">
                    <a href="mailto:henrique.f.dutra@gmail.com">henrique.f.dutra@gmail.com</a>
                </div>
            </div>
        </>
    )
}

export default Social