import { FunctionComponent, useState } from "react";

interface ContactFormInputProps {
	name: string;
	type: string;
	value: string;
	handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	required: boolean;
	pattern?: string;
}

const ContactFormInput: FunctionComponent<ContactFormInputProps> = ({
	name,
	type,
	value,
	handler,
	placeholder,
	required,
	pattern,
}) => (
	<input
		name={name}
		type={type}
		value={value}
		onChange={handler}
		className="py-5 px-10 bg-gray-300"
		placeholder={placeholder}
		required={required}
		pattern={pattern}
		//minlength="3"
	/>
);

interface ContactForm {
	name: string;
	email: string;
	telephone: string;
	message: string;
}

const ContactForm: FunctionComponent = () => {
	const [contactForm, setContactForm] = useState<ContactForm>({
		name: "",
		email: "",
		telephone: "",
		message: "",
	});

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const { name, value } = event.target;
		setContactForm((prevContactForm) => {
			return {
				...prevContactForm,
				[name]: value,
			};
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		console.log(contactForm);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex-1 gap-4 flex flex-col justify-center">
			<ContactFormInput
				name="name"
				type="text"
				handler={handleInputChange}
				placeholder="Nome"
				value={contactForm.name}
				required={true}
			/>
			<ContactFormInput
				name="email"
				type="email"
				handler={handleInputChange}
				placeholder="Email"
				value={contactForm.email}
				required={true}
			/>
			<ContactFormInput
				name="telephone"
				type="tel"
				placeholder="Seu Telefone"
				handler={handleInputChange}
				value={contactForm.telephone}
				required={true}
				pattern="[0-9]+"
				//minlength="9"
				//maxlength="9"
			/>

			<textarea
				name="message"
				className="py-5 px-10 bg-gray-300"
				value={contactForm.message}
				onChange={(event) => handleInputChange(event)}
				placeholder="A sua Mensagem"
				required></textarea>

			<input
				type="submit"
				name="submit"
				className="py-5 px-10 bg-gray-800 text-white"
			/>
		</form>
	);
};

export default ContactForm;
