import { FunctionComponent } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Container from "../Container";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer className="py-10 bg-gray-800 ">
			<Container>
				<div className="flex justify-center items-center gap-10">
					<a href="#">
						<FaFacebook
							className="hover:scale-125 transition duration-300 text-white hover:text-aquapharma-blue"
							size={"1.5rem"}
						/>
					</a>
					<a href="#">
						<FaInstagram
							className="hover:scale-125 transition duration-300 text-white hover:text-aquapharma-blue"
							size={"1.5rem"}
						/>
					</a>
					<a href="#">
						<FaTwitter
							className="hover:scale-125 transition duration-300 text-white hover:text-aquapharma-blue"
							size={"1.5rem"}
						/>
					</a>
					<a href="#">
						<FaLinkedinIn
							className="hover:scale-125 transition duration-300 text-white hover:text-aquapharma-blue"
							size={"1.5rem"}
						/>
					</a>
					<a href="#">
						<FaYoutube
							className="hover:scale-125 transition duration-300 text-white hover:text-aquapharma-blue"
							size={"1.5rem"}
						/>
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
