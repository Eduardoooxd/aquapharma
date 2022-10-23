import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<Link href="/">
					<a className={styles.navbar__logo__link}>
						<Image
							priority
							src="/assets/images/logo/logo.jpg"
							alt="Logo da Aquapharma"
							height={70}
							width={170}
							className={styles.navbar__logo__img}
						/>
					</a>
				</Link>

				<button className={styles.menu__toggler}>
					<span className={styles.menu__toggler__lines}></span>
					<span className={styles.menu__toggler__lines}></span>
					<span className={styles.menu__toggler__lines}></span>
				</button>

				<div className={styles.navbar__links__container}>
					<a href="#about" className={styles.navbar__links}>
						A nossa missão
					</a>
					<Link href="./produtos">
						<a className={styles.navbar__links}>Produtos</a>
					</Link>
					<a href="#contact" className={styles.navbar__links}>
						Contactos
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
