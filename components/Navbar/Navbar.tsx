import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Container from "../Container/Container";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<nav className="fixed bg-transparent w-full py-8 top-0 z-50 transition-all ease-linear duration-300 overflow-x-hidden flex justify-center">
			<Container>
				<div className="w-full flex justify-between items-center">
					<div>
						<Link href="/">
							<a>
								<Image
									priority
									src="/assets/images/logo/logo.jpg"
									alt="Logo da Aquapharma"
									height={70}
									width={170}
									className="object-contain "
								/>
							</a>
						</Link>
					</div>
					<div className="flex gap-x-6 text-white">
						<Link href="">
							<a
								href="#about"
								className="uppercase transition duration-200 ease-linear hover:text-blue-600 shadow-2xl">
								A nossa missão
							</a>
						</Link>

						<Link href="./produtos">
							<a className="uppercase transition duration-200 ease-linear hover:text-blue-600 shadow-2xl">
								Produtos
							</a>
						</Link>
						<Link href="">
							<a
								href="#contact"
								className="uppercase transition duration-200 ease-linear hover:text-blue-600 ">
								Contactos
							</a>
						</Link>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
