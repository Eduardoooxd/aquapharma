import { FunctionComponent } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Container from '../Container';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="bg-gray-800 py-10">
            <Container>
                <div className="flex items-center justify-center gap-10">
                    <a href="#">
                        <FaFacebook
                            className="text-white transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                            size={'1.5rem'}
                        />
                    </a>
                    <a href="#">
                        <FaInstagram
                            className="text-white transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                            size={'1.5rem'}
                        />
                    </a>
                    <a href="#">
                        <FaTwitter
                            className="text-white transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                            size={'1.5rem'}
                        />
                    </a>
                    <a href="#">
                        <FaLinkedinIn
                            className="text-white transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                            size={'1.5rem'}
                        />
                    </a>
                    <a href="#">
                        <FaYoutube
                            className="text-white transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                            size={'1.5rem'}
                        />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
