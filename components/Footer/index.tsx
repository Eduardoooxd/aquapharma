import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Container from '../Container';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 py-10 text-white">
            <Container className="px-10">
                <div className="flex flex-col items-center justify-around gap-10 lg:flex-row">
                    <p>Aquapharma | 2018 - {currentYear}</p>
                    <div className="order-first flex items-center justify-center gap-10 self-center sm:order-last">
                        <a
                            target="_blank"
                            aria-label="Descubra mais informaçoes sobre a Aquapharma no Facebook"
                            href="https://www.facebook.com/people/AQUAPHARMA/100086990934527/"
                        >
                            <FaFacebook
                                className="transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                                size={'1.5rem'}
                            />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/_aquapharma/">
                            <FaInstagram
                                aria-label="Descubra mais informaçoes sobre a Aquapharma no Instagram"
                                className="transition duration-300 hover:scale-125 hover:text-aquapharma-blue"
                                size={'1.5rem'}
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
