import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"

function Footer() {
    return (
     
        <footer className="text-left text-dark footer--pin mt-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative", left: 0, bottom: 0, right: 0, maxHeight: "calc(100vh - 67px)" }}>

            <div className="">

                <div className="d-flex flex-row justify-content-around">
                    <div className="m-1">
                        <h5>Luciano</h5>
                        <a href="https://github.com/lucianobfs" target="_blank" className="text-decoration-none text-dark mr-4">
                            <FaGithub size="25px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/luciano-santana-65937a221/" target="_blank" className="text-decoration-none text-dark">
                            <FaLinkedin size="25px"/>
                        </a>
                    </div>
                    <div className="m-1">
                        <h5>Matheus</h5>
                        <a href="https://github.com/matheusanjo" target="_blank" className="text-decoration-none text-dark mr-4">
                            <FaGithub size="25px"/>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" className="text-decoration-none text-dark">
                            <FaLinkedin size="25px"/>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;