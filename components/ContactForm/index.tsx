import { FunctionComponent, useState } from "react";

interface ContactFormInputProps {
	name: string;
	type: string;
	value: string;
	handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	required: boolean;
	triedSubmission: boolean;
	pattern?: string;
	minLength?: number;
	maxLength?: number;
}

const ContactFormInput: FunctionComponent<ContactFormInputProps> = ({
	name,
	type,
	value,
	handler,
	placeholder,
	required,
	triedSubmission,
	pattern,
	minLength,
	maxLength,
}) => {
	const [hasInteracted, setHasInteracted] = useState(false);
	const invalidInputActionTrigger = hasInteracted || triedSubmission;

	return (
		<div className="w-full flex flex-col">
			<input
				name={name}
				type={type}
				value={value}
				onChange={handler}
				className={`peer py-5 drop-shadow-md px-10 bg-gray-300 ${
					invalidInputActionTrigger &&
					"invalid:border invalid:border-red-400 invalid:rounded"
				}`}
				placeholder={placeholder}
				required={required}
				onKeyDown={() => setHasInteracted(true)}
				pattern={pattern}
				minLength={minLength}
				maxLength={maxLength}
			/>
			{invalidInputActionTrigger ? (
				<span className="mt-2 opacity-0 capitalize peer-invalid:opacity-100 text-red-400 transition-all">
					Introduza {placeholder} valido
				</span>
			) : null}
		</div>
	);
};

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

	const [triedSubmission, setTriedSubmission] = useState(false);

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
			className="flex-1 gap-2 flex flex-col justify-center">
			<ContactFormInput
				name="name"
				type="text"
				handler={handleInputChange}
				placeholder="Nome"
				value={contactForm.name}
				triedSubmission={triedSubmission}
				required={true}
				minLength={3}
				maxLength={22}
			/>
			<ContactFormInput
				name="email"
				type="email"
				handler={handleInputChange}
				triedSubmission={triedSubmission}
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
				triedSubmission={triedSubmission}
				required={true}
				pattern="[0-9]+"
				minLength={9}
				maxLength={9}
			/>

			<textarea
				name="message"
				className="py-5 resize-none drop-shadow-md px-10 bg-gray-300 mb-10"
				value={contactForm.message}
				onChange={(event) => handleInputChange(event)}
				placeholder="A sua Mensagem"></textarea>

			<input
				type="submit"
				value="Enviar"
				onClick={() => setTriedSubmission(true)}
				className="drop-shadow-md hover:underline hover:drop-shadow-lg cursor-pointer text-xl py-5 px-10 hover:bg-gray-500 bg-gray-800 text-white transition-all"
			/>
		</form>
	);
};

export default ContactForm;
