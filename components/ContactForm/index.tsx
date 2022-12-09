import { FunctionComponent } from "react";

interface ContactFormInputProps {
	name: string;
	type: string;
	placeholder: string;
	required: boolean;
	pattern?: string;
}

const ContactFormInput: FunctionComponent<ContactFormInputProps> = ({
	name,
	type,
	placeholder,
	required,
	pattern,
}) => (
	<input
		name={name}
		type={type}
		className="py-5 px-10 bg-gray-300"
		placeholder={placeholder}
		required={required}
		pattern={pattern}
		//minlength="3"
	/>
);

const ContactForm: FunctionComponent = () => {
	return (
		<form className="flex-1 gap-4 flex flex-col justify-center">
			<ContactFormInput
				name="name"
				type="text"
				placeholder="Nome"
				required={true}
			/>
			<ContactFormInput
				name="email"
				type="email"
				placeholder="Email"
				required={true}
			/>
			<ContactFormInput
				name="telephone"
				type="tel"
				placeholder="Seu Telefone"
				required={true}
				pattern="[0-9]+"
				//minlength="9"
				//maxlength="9"
			/>

			<textarea
				name="message"
				className="py-5 px-10 bg-gray-300"
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
