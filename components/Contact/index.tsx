import { FunctionComponent } from "react";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	return (
		<section>
			<section className="grid" id="contact">
				<div className="inner-width">
					<h1 className="section-title" id="titulo">
						CONTACTOS
					</h1>
					<div className="contact-section">
						<div className="border"></div>
						<form
							className="contact-form"
							method="post"
							id="myForm"
							action="https://formsubmit.co/6825cbb1c19262dbe7f04f6331498806">
							<input
								type="hidden"
								name="_next"
								value="https://eduardoooxd.github.io/AQUAPHARMA-WEBSITE/"
							/>
							<input
								type="hidden"
								name="_captcha"
								value="false"
							/>
							<input
								name="name"
								type="text"
								className="contact-form-text name"
								placeholder="Nome"
								required
								minlength="3"
							/>
							<input
								name="email"
								type="email"
								className="contact-form-text email"
								placeholder="Email"
								required
							/>
							<input
								name="tele"
								type="tel"
								className="contact-form-text tele"
								placeholder="Seu Telefone"
								required
								minlength="9"
								maxlength="9"
								pattern="[0-9]+"
							/>
							<textarea
								name="message"
								className="contact-form-text message"
								placeholder="A sua Mensagem"
								required></textarea>
							<input
								type="submit"
								name="submit"
								className="contact-form-btn"
								value="Enviar"
							/>
						</form>
					</div>
					<div className="contact-info">
						<h1>Queremos sempre falar consigo</h1>
						<p>
							Estamos aqui sempre para falar consigo. Caso tenha
							alguma questão, problema <br />
							ou queira mais informações sobre algo relativo à
							AQUAPHARMA, <br />
							por favor utilize o nosso formulário ou contactos
							alternativos. Prometemos ser breves e falar consigo
							assim que possível.
						</p>
						<h1>Contactos Alternativos</h1>
						<h2>Morada</h2>
						<p>
							Lugar de Gandra Aptd 135 4560-143 Guilhufe, Penafiel
						</p>
						<h2>EMAIL</h2>
						<p>Jesuspereira.m.industriais@gmail.com</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Contact;
